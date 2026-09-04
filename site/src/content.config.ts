import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    framework: z.enum(['SOC 2', 'ISO 27001', 'NIS2', 'DORA', 'GDPR', 'EU AI Act', 'Other']),
    pubDate: z.coerce.date(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { guides };
