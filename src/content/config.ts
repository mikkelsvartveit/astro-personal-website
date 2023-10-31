import { z, defineCollection } from "astro:content";

const programmingCollection = defineCollection({
  type: "content",
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
  type: "content",
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
