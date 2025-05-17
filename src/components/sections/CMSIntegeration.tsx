'use client';

import { client } from '@/lib/sanity';
import { getAnimeContent } from '@/lib/markdown';

async function AnimeContent() {
  const sanityData = await client.fetch(`
    *[_type == "anime"] {
      title,
      description,
      "imageUrl": poster.asset->url
    }
  `);

  const markdownData = await getAnimeContent();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      {[...sanityData, ...markdownData].map((item, index) => (
        <AnimeCard key={index} data={item} />
      ))}
    </div>
  );
}
