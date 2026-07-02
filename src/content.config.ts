import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    year: z.string(),
    status: z.string(),
    featured: z.boolean().default(false),
    image: z.string(),
    imageAlt: z.string(),
    tags: z.array(z.string()),
    metrics: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      }),
    ),
    links: z.array(
      z.object({
        label: z.string(),
        url: z.string(),
      }),
    ),
  }),
});

export const collections = { projects };
