"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function CaptureContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [imageKey, setImageKey] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    const key = searchParams.get("imageKey");
    if (key) {
      setImageKey(key);
    }
  }, [searchParams]);

  const handleSave = () => {
    const captures = JSON.parse(localStorage.getItem("captures") || "[]");
    captures.push({
      key: imageKey,
      title,
      tags,
      imageSrc: localStorage.getItem(imageKey),
    });
    localStorage.setItem("captures", JSON.stringify(captures));
    router.push("/view");
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Capture Details</h1>
      <img
        src={localStorage.getItem(imageKey)}
        alt="Captured"
        className="mb-4 max-w-full h-auto"
      />
      <div className="mb-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="border p-2 w-full rounded"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </div>
  );
}

export default function Capture() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CaptureContent />
    </Suspense>
  );
}
