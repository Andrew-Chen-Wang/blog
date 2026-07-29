#!/usr/bin/env node
/**
 * Block images carrying EXIF/GPS/XMP/IPTC metadata from entering the repo.
 *
 * The repo is public, so a photo committed straight off a phone would publish
 * its capture coordinates. Images are expected to be re-encoded (which drops all
 * metadata) before they land in src/ or public/.
 *
 *   node scripts/check-image-metadata.mjs --staged   # what the pre-commit hook runs
 *   node scripts/check-image-metadata.mjs [files...] # check specific files
 *
 * No dependencies: the containers are parsed directly.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";

const RASTER = /\.(jpe?g|png|webp|gif)$/i;
const UNSUPPORTED = /\.(heic|heif|avif|tiff?|dng|cr2|nef|arw)$/i;

/** JPEG markers that carry no length field. */
const STANDALONE = new Set([0xd8, 0xd9, 0x01, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4, 0xd5, 0xd6, 0xd7]);

/** Does this TIFF block (EXIF payload) contain a GPS IFD? */
function hasGpsIfd(tiff) {
	if (tiff.length < 8) return false;
	const le = tiff[0] === 0x49 && tiff[1] === 0x49;
	const u16 = (o) => (le ? tiff.readUInt16LE(o) : tiff.readUInt16BE(o));
	const u32 = (o) => (le ? tiff.readUInt32LE(o) : tiff.readUInt32BE(o));
	const ifd0 = u32(4);
	if (ifd0 + 2 > tiff.length) return false;
	const count = u16(ifd0);
	for (let i = 0; i < count; i++) {
		const entry = ifd0 + 2 + i * 12;
		if (entry + 12 > tiff.length) break;
		if (u16(entry) === 0x8825) return true; // GPSInfo IFD pointer
	}
	return false;
}

function scanJpeg(buf) {
	const found = [];
	let i = 2;
	while (i + 4 <= buf.length && buf[i] === 0xff) {
		const marker = buf[i + 1];
		if (STANDALONE.has(marker)) {
			i += 2;
			continue;
		}
		if (marker === 0xda) break; // start of scan: pixel data from here on
		const len = buf.readUInt16BE(i + 2);
		const payload = buf.subarray(i + 4, i + 2 + len);
		if (marker === 0xe1) {
			if (payload.subarray(0, 6).toString("latin1") === "Exif\0\0") {
				const tiff = payload.subarray(6);
				found.push(hasGpsIfd(tiff) ? "EXIF with GPS coordinates" : "EXIF");
			} else if (payload.toString("latin1", 0, 29).startsWith("http://ns.adobe.com/xap")) {
				found.push("XMP");
			} else {
				found.push("APP1 metadata");
			}
		} else if (marker === 0xe2 && payload.subarray(0, 4).toString("latin1") === "MPF\0") {
			found.push("MPO multi-picture (embedded image with its own EXIF)");
		} else if (marker === 0xed) {
			found.push("IPTC/Photoshop");
		}
		i += 2 + len;
	}
	return found;
}

function scanWebp(buf) {
	const found = [];
	let i = 12;
	while (i + 8 <= buf.length) {
		const chunk = buf.toString("latin1", i, i + 4);
		const size = buf.readUInt32LE(i + 4);
		if (chunk === "EXIF") {
			const body = buf.subarray(i + 8, i + 8 + size);
			const tiff = body.subarray(0, 6).toString("latin1") === "Exif\0\0" ? body.subarray(6) : body;
			found.push(hasGpsIfd(tiff) ? "EXIF with GPS coordinates" : "EXIF");
		} else if (chunk === "XMP ") {
			found.push("XMP");
		}
		i += 8 + size + (size % 2);
	}
	return found;
}

function scanPng(buf) {
	const found = [];
	let i = 8;
	while (i + 8 <= buf.length) {
		const size = buf.readUInt32BE(i);
		const type = buf.toString("latin1", i + 4, i + 8);
		const body = buf.subarray(i + 8, i + 8 + size);
		if (type === "eXIf") {
			found.push(hasGpsIfd(body) ? "EXIF with GPS coordinates" : "EXIF");
		} else if (type === "iTXt" && body.toString("latin1", 0, 17) === "XML:com.adobe.xmp") {
			found.push("XMP");
		}
		if (type === "IEND") break;
		i += 12 + size; // length + type + data + crc
	}
	return found;
}

export function scan(buf, name) {
	if (UNSUPPORTED.test(name)) {
		return ["camera/raw format — metadata not verifiable here; convert to jpeg/webp first"];
	}
	if (buf.length > 3 && buf[0] === 0xff && buf[1] === 0xd8) return scanJpeg(buf);
	if (buf.length > 12 && buf.toString("latin1", 0, 4) === "RIFF" && buf.toString("latin1", 8, 12) === "WEBP")
		return scanWebp(buf);
	if (buf.length > 8 && buf.toString("latin1", 1, 4) === "PNG") return scanPng(buf);
	return [];
}

function stagedImages() {
	const out = execFileSync("git", ["diff", "--cached", "--name-only", "--diff-filter=ACM", "-z"], {
		encoding: "buffer",
	});
	return out
		.toString("utf8")
		.split("\0")
		.filter((f) => f && (RASTER.test(f) || UNSUPPORTED.test(f)));
}

const args = process.argv.slice(2);
const useStaged = args.includes("--staged") || args.length === 0;
const files = useStaged ? stagedImages() : args;
const problems = [];

for (const file of files) {
	// Read the staged blob, not the working tree, so the check matches what is committed.
	let buf;
	try {
		buf = useStaged
			? execFileSync("git", ["show", `:${file}`], { encoding: "buffer", maxBuffer: 512 * 1024 * 1024 })
			: fs.readFileSync(file);
	} catch {
		continue;
	}
	const found = scan(buf, file);
	if (found.length) problems.push({ file, found: [...new Set(found)] });
}

if (problems.length) {
	console.error("\n[31mBlocked: image metadata found in files being committed.[0m");
	console.error("This repo is public — EXIF from a phone photo includes GPS coordinates.\n");
	for (const { file, found } of problems) console.error(`  ${file}\n      ${found.join(", ")}`);
	console.error("\nStrip it by re-encoding (also resizes to a sane width):\n");
	console.error(`  node scripts/strip-image-metadata.mjs ${problems.map((p) => p.file).join(" ")}`);
	console.error("\nThen re-stage the files. To commit anyway: git commit --no-verify\n");
	process.exit(1);
}

if (files.length) console.log(`image metadata check: ${files.length} image(s) clean`);
