

import React from 'react';
import Link from 'next/link';

export default async function Blog() {
  // Fetch posts data at build time
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="grid gap-4 sm:grid-cols-2">
        {posts.slice(0, 20).map(p => (
          <li key={p.id} className="border rounded p-4 shadow-sm hover:shadow-md">
            <Link href={`/blog/${p.id}`} className="text-lg font-semibold text-blue-600">
              {p.title}
            </Link>
            <p className="text-sm text-gray-600 mt-2">{p.body.slice(0, 120)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
