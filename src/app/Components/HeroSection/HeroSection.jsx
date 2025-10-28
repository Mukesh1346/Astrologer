'use client';
import React, { useEffect, useRef, useState } from 'react';
import './MediaCarousel.css'; // 👈 import external CSS
import pic1 from '@/app/Assets/Images/Websitebanner.jpg';
import pic2 from '@/app/Assets/Images/wallpaper2.png';


const slides = [
  { type: 'video', src: '/vid.mp4', alt: 'Video 1' },
  { type: 'image', src: pic1.src, alt: 'Image 1' },
  { type: 'video', src: '/vid4.mp4', alt: 'Video 2' },
  { type: 'image', src: pic2.src, alt: 'Image 2' },
];

export default function HeroSection() {
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides[0].type === 'video') {
      const firstVideo = videoRefs.current[0];
      if (firstVideo) {
        firstVideo.currentTime = 0;
        firstVideo.play().catch(err => console.warn('Autoplay blocked:', err));
      }
    }

    const showNext = () => {
      const currentIndex = activeIndex;
      const nextIndex = (currentIndex + 1) % slides.length;

      if (slides[currentIndex].type === 'video') {
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo) currentVideo.pause();
      }

      setActiveIndex(nextIndex);

      if (slides[nextIndex].type === 'video') {
        const nextVideo = videoRefs.current[nextIndex];
        if (nextVideo) {
          nextVideo.currentTime = 0;
          nextVideo.play().catch(err => console.warn('Autoplay prevented:', err));
        }
      }
    };

    intervalRef.current = setInterval(showNext, 10000);
    return () => clearInterval(intervalRef.current);
  }, [activeIndex]);

  return (
    <div className="custom-carousel-wrapper" ref={carouselRef}>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === activeIndex ? 'active' : 'inactive'}`}
            key={index}
          >
            {slide.type === 'image' ? (
              <img src={slide.src} alt={slide.alt} />
            ) : (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={slide.src}
                muted
                playsInline
                preload="auto"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
