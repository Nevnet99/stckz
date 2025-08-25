import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const stacks = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		category: z.array(z.string()),
		tags: z.array(z.string()),
		author: z.string(),
		status: z.enum(['planning', 'in-progress', 'completed', 'on-hold']).optional(),
		githubUrl: z.string().optional(),
		liveUrl: z.string().optional(),
		techStack: z.array(z.string()).optional(),
		readTime: z.number().optional(),
	}),
});

export const collections = { blog, stacks };
