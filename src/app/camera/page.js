"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Webcam from "react-webcam";
import { v4 as uuidv4 } from "uuid";

export default function Camera() {
  const webcamRef = useRef(null);
  const router = useRouter();

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageKey = uuidv4();
    localStorage.setItem(imageKey, imageSrc);
    router.push(`/capture?imageKey=${imageKey}`);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Camera Page</h1>
      <div className="mb-4">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-full h-auto"
        />
      </div>
      <button
        onClick={capture}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Capture photo
      </button>
    </div>
  );
}
