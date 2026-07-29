#!/usr/bin/env node
/**
 * Re-encode images in place: drops all metadata (EXIF/GPS/XMP/IPTC) and resizes
 * to a web-sane width. This is the same pass the Apple Notes recipe photos went
 * through — sharp discards metadata unless explicitly asked to keep it.
 *
 *   node scripts/strip-image-metadata.mjs src/assets/images/foo.jpeg [...]
 *   node scripts/strip-image-metadata.mjs --width 2000 file.jpeg
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
let width = 1600;
const widthAt = args.indexOf("--width");
if (widthAt !== -1) {
	width = Number(args[widthAt + 1]);
	args.splice(widthAt, 2);
}

if (!args.length) {
	console.error("usage: node scripts/strip-image-metadata.mjs [--width 1600] <files...>");
	process.exit(1);
}

for (const file of args) {
	const ext = path.extname(file).toLowerCase();
	const tmp = `${file}.tmp-strip`;
	// .rotate() bakes in the EXIF orientation before that tag is discarded.
	const pipeline = sharp(file).rotate().resize({ width, withoutEnlargement: true });
	const encoded = ext === ".webp" ? pipeline.webp({ quality: 82 })
		: ext === ".png" ? pipeline.png()
		: pipeline.jpeg({ quality: 82, mozjpeg: true });
	await encoded.toFile(tmp);
	const before = fs.statSync(file).size;
	fs.renameSync(tmp, file);
	const after = fs.statSync(file).size;
	console.log(`${file}: ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e3).toFixed(0)}KB (metadata stripped)`);
}
