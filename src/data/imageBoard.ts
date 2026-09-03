// Image board entries.
//
// To add an image:
//   1. Drop the file into `src/assets/images/image_board/`.
//   2. Add an entry to `IMAGE_BOARD` below with the file's name, a label, a
//      description, and the date it was created (`YYYY-MM-DD`, written by hand).
//
// No import needed — the file name is looked up in the folder at build time,
// and a wrong name fails the build with the list of files it did find.
//
// Order doesn't matter here; the page sorts by `date`, newest first.

import type { ImageMetadata } from "astro";

export type ImageBoardEntry = {
	/** File name inside `src/assets/images/image_board/`, e.g. "my-photo.png". */
	file: string;
	label: string;
	description: string;
	/** Date of creation, written manually as YYYY-MM-DD. */
	date: string;
	/** Optional: where it came from — a URL, or just a note like "Shot on my phone". */
	source?: string;
};

export const IMAGE_BOARD: ImageBoardEntry[] = [
	{
		file: "DaTang Village Guizhou.png",
		label: "DaTang Village, Guizhou",
		description: "I love the tranquility and morphing of houses along the hill",
		date: "2025-09-03",
		source: "https://www.youtube.com/watch?v=-xwCf3ATd6M"
	},
];

const files = import.meta.glob<{ default: ImageMetadata }>("../assets/images/image_board/*.{png,jpg,jpeg,webp,gif,avif,svg}", {
	eager: true,
});

/** File name -> image metadata, for every image in the board folder. */
const imagesByFile = new Map<string, ImageMetadata>(
	Object.entries(files).map(([path, mod]) => [path.split("/").pop() as string, mod.default]),
);

export type ImageBoardItem = ImageBoardEntry & { src: ImageMetadata };

export const SORTED_IMAGE_BOARD: ImageBoardItem[] = [...IMAGE_BOARD]
	.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf())
	.map((entry) => {
		const src = imagesByFile.get(entry.file);
		if (!src) {
			throw new Error(
				`Image board: no file named "${entry.file}" in src/assets/images/image_board/. ` +
					`Found: ${[...imagesByFile.keys()].join(", ") || "(none)"}`,
			);
		}
		return { ...entry, src };
	});
