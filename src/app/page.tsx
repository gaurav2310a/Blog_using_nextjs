'use client';

import React, { useEffect, useState } from 'react';

type Info = { name: string; author: string; lastUpdated: string };

export default function Home() {
  const [info, setInfo] = useState<Info | null>(null);

  useEffect(() => {
    fetch('/api/info')
      .then(r => r.json())
      .then(setInfo)
      .catch(console.error);
  }, []);

  const formatLastUpdated = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mini Blog</h1>
      <p className="mb-4">A small demo app built with Next.js and Tailwind CSS.</p>

      <div className="mb-6 p-4 border rounded-md">
        <h2 className="font-semibold">App Info</h2>
        {info ? (
          <div>
            <div>Name: {info.name}</div>
            <div>Author: {info.author}</div>
            <div className="text-sm text-gray-600 mt-2">
              Last Updated: {formatLastUpdated(info.lastUpdated)}
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}