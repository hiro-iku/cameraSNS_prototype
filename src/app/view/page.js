"use client";

import Link from "next/link";
import { useEffect, useState, Suspense } from "react";

function ViewContent() {
  const [captures, setCaptures] = useState([]);

  useEffect(() => {
    const storedCaptures = JSON.parse(localStorage.getItem("captures") || "[]");
    setCaptures(storedCaptures);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">View Captures</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {captures.map((capture, index) => (
          <Link
            href={`/detail/${capture.key}`}
            key={index}
            className="block border rounded overflow-hidden hover:shadow-lg"
          >
            <img
              src={capture.imageSrc}
              alt={capture.title}
              className="w-full h-auto"
            />
            <div className="p-2">
              <p className="text-center">{capture.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function View() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ViewContent />
    </Suspense>
  );
}
