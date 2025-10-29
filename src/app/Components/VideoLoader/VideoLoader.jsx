"use client";
import React, { useEffect, useState } from "react";
import "./VideoLoader.css";

const VideoLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [showCurtain, setShowCurtain] = useState(false);
  const [fadeVideo, setFadeVideo] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("videoLoaderShown");

    if (!hasShown) {
      // Step 1: Play video for 4 seconds
      const timer = setTimeout(() => {
        // Step 2: Fade out video
        setFadeVideo(true);

        // Step 3: Start curtain animation slightly after fade starts
        setTimeout(() => {
          setShowCurtain(true);
        }, 300); // short delay for smoothness

        // Step 4: After curtain animation, show homepage
        setTimeout(() => {
          setLoading(false);
          sessionStorage.setItem("videoLoaderShown", "true");
        }, 1800);
      }, 4000);

      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return (
      <>
        {/* Video loader */}
        <div
          className={`video-loader-container ${
            fadeVideo ? "fade-out" : ""
          }`}
        >
          <video className="video-loader" autoPlay muted playsInline preload="auto">
            <source src="/vid.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
        </div>

        {/* Curtain effect */}
        {showCurtain && (
          <div className="curtain-wrapper">
            <div className="curtain left"></div>
            <div className="curtain right"></div>
          </div>
        )}
      </>
    );
  }

  // Step 5: Show homepage
  return <>{children}</>;
};

export default VideoLoader;
