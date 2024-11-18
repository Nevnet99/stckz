import { defineCollection, reference, z } from "astro:content";

const author = defineCollection({
  type: "data",
  schema: z.object({
    name: z.string(),
    github: z.string(),
    image: z.string(),
  }),
});

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      author: reference("authors"),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image(),
    }),
});

export const collections = { author, blog };
