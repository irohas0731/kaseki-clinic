'use client';

import { useRef, useState } from 'react';

interface HeroSectionProps {
  videoSrc?: string;
  fallbackImage: string;
  catchCopyJa: string;
  catchCopyEn: string;
}

export function HeroSection({ videoSrc, fallbackImage, catchCopyJa, catchCopyEn }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const showVideo = videoSrc && !videoError;

  return (
    <section className="relative w-full h-[80vh] lg:h-[90vh] overflow-hidden">
      {/* Video or Fallback */}
      {showVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          poster={fallbackImage}
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : null}

      {/* Fallback image */}
      {(!showVideo || !isVideoLoaded) && (
        <div
          className="absolute inset-0 bg-gray-300 flex items-center justify-center"
          style={{ backgroundImage: `url(${fallbackImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <span className="text-white/50 text-sm">1920 × 1080 ヒーロー画像</span>
        </div>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Copy */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <p className="font-serif text-[28px] md:text-[42px] font-light tracking-wider mb-4 leading-tight">
          {catchCopyEn}
        </p>
        <h1 className="font-serif text-lg md:text-2xl font-semibold tracking-widest">
          {catchCopyJa}
        </h1>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80">
        <span className="text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-white/60 animate-bounce" />
      </div>
    </section>
  );
}
