'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-black shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-xl font-semibold">Mini Blog</div>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/about" className="hover:text-blue-600">About</Link>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-black border-t">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link href="/" className="block hover:text-blue-600">Home</Link>
            <Link href="/blog" className="block hover:text-blue-600">Blog</Link>
            <Link href="/about" className="block hover:text-blue-600">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
