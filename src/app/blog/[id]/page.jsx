

import React from 'react';

export default async function PostPage({ params }) {
  const { id } = await params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();

  if (!post) return <div className="container mx-auto px-4 py-8">Post not found</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <div className="prose">{post.body}</div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return posts.slice(0, 20).map(p => ({
    id: p.id.toString()
  }));
}
