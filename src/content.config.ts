import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const programmingCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/programming" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(),
      technologies: z.array(z.string()),
      website: z.string().url(),
      repository: z.string().url().optional(),
      date: z.date(),
    }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      intro: z.string(),
      date: z.date(),
    }),
});

export const collections = {
  programming: programmingCollection,
  blog: blogCollection,
};
