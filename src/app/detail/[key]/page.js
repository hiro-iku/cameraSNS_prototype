"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Detail() {
  const { key } = useParams();
  const [capture, setCapture] = useState(null);

  useEffect(() => {
    if (key) {
      const captures = JSON.parse(localStorage.getItem("captures") || "[]");
      const foundCapture = captures.find((capture) => capture.key === key);
      if (foundCapture) {
        setCapture(foundCapture);
      }
    }
  }, [key]);

  if (!capture) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{capture.title}</h1>
      <img
        src={capture.imageSrc}
        alt={capture.title}
        className="mb-4 max-w-full h-auto"
      />
      <p className="mb-4">{capture.tags}</p>
    </div>
  );
}
