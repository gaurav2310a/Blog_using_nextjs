import React, { useEffect, useState } from 'react';

export default function Home() {
  const [info, setInfo] = useState(null);

  useEffect(() => {
    fetch('/api/info')
      .then(r => r.json())
      .then(setInfo)
      .catch(console.error);
  }, []);

  const formatLastUpdated = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to Mini Blog</h1>

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