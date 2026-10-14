import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({
		pattern: ["**/*.md", "!**/AGENTS.md", "!**/CLAUDE.md"],
		base: "./src/content/blog"
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const shortthoughts = defineCollection({
	loader: glob({
		pattern: ["**/*.md"],
		base: "./src/content/shortthoughts"
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const recipes = defineCollection({
	loader: glob({
		pattern: ["**/*.md"],
		base: "./src/content/recipes"
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

const workoutUpdates = defineCollection({
	loader: glob({
		pattern: ["**/*.md"],
		base: "./src/content/workouts/updates"
	}),
	schema: z.object({
		pubDate: z.coerce.date(),
	}),
});

// Each topic is a folder: index.md holds my current thinking, learnings/ holds dated notes
const politicalTopics = defineCollection({
	loader: glob({
		pattern: ["*/index.md"],
		base: "./src/content/political-topics",
		generateId: ({ entry }) => entry.split("/")[0],
	}),
	schema: z.object({
		title: z.string(),
		group: z.enum(["beliefs", "care", "learning", "written"]),
		order: z.number(),
	}),
});

const politicalTopicLearnings = defineCollection({
	loader: glob({
		pattern: ["*/learnings/*.md"],
		base: "./src/content/political-topics",
	}),
	schema: z.object({
		pubDate: z.coerce.date(),
		title: z.string().optional(),
	}),
});

export const collections = { blog, shortthoughts, recipes, workoutUpdates, politicalTopics, politicalTopicLearnings };
