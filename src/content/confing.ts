import { defineCollection, z } from "astro:content";

const product = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.coerce.number(),
    description: z.string(),
    heroImage: z.string(),
    category: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collection = { product };
