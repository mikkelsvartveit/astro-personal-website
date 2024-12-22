import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md*", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      intro: z.string(),
      image: image(),
      date: z.date(),
    }),
});

const programming = defineCollection({
  loader: glob({ pattern: "*.md*", base: "./src/content/programming" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      date: z.date(),
      technologies: z.array(z.string()),
      website: z.string().optional(),
      repository: z.string().optional(),
    }),
});

export const collections = { blog, programming };
