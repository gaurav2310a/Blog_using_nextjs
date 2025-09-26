import React from 'react';

export default function About() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">About Mini Blog</h1>

          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to Mini Blog, your go-to platform for discovering and sharing amazing content.
              We're passionate about creating a space where ideas flow freely and knowledge is shared effortlessly.
            </p>

            </div>
        </div>
      </div>

      {/* <script dangerouslySetInnerHTML={{
        __html: `
          fetch('/api/info')
            .then(r => r.json())
            .then(data => {
              const lastUpdated = new Date(data.lastUpdated).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
              document.getElementById('last-updated').textContent = lastUpdated;
            })
            .catch(console.error);
        `
      }} /> */}
    </>
  );
}
