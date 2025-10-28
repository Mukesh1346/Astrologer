"use client";
import React, { useEffect, useState } from "react";
import "./VideoLoader.css"; // external CSS file

const VideoLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if loader has already been shown in this session
    const hasShown = sessionStorage.getItem("videoLoaderShown");

    if (!hasShown) {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("videoLoaderShown", "true");
      }, 4000); // ⏱ show video for exactly 4 seconds
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <div className="video-loader-container">
        <video
          className="video-loader"
          autoPlay
          muted
          playsInline
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    );
  }

  return <>{children}</>;
};

export default VideoLoader;
