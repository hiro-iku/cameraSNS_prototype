"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Webcam from "react-webcam";
import { v4 as uuidv4 } from "uuid";

export default function Camera() {
  const webcamRef = useRef(null);
  const router = useRouter();
  const [facingMode, setFacingMode] = useState("environment"); // Default to back camera

  const videoConstraints = {
    facingMode: facingMode,
  };

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const imageKey = uuidv4();
    localStorage.setItem(imageKey, imageSrc);
    router.push(`/capture?imageKey=${imageKey}`);
  };

  const switchCamera = () => {
    setFacingMode((prevFacingMode) =>
      prevFacingMode === "environment" ? "user" : "environment"
    );
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
          videoConstraints={videoConstraints}
        />
      </div>
      <div className="space-x-4">
        <button
          onClick={capture}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Capture photo
        </button>
        <button
          onClick={switchCamera}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Switch to {facingMode === "environment" ? "Front" : "Back"} Camera
        </button>
      </div>
    </div>
  );
}
