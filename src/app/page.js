"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>
      <div className="space-x-4">
        <Link href="/camera">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Open Camera
          </button>
        </Link>
        <Link href="/view">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            View Captures
          </button>
        </Link>
      </div>
    </div>
  );
}
