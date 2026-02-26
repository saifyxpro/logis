'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initSplitImageAnimation } from '@/libs/gsapAnimations';

interface SplitImageProps {
  src: string;
  alt: string;
  className?: string; // For the outer container
  numColumns?: number;
}

export default function SplitImage({ src, alt, className = "", numColumns = 4 }: SplitImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const columnsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    // Initialize animation from external TS file
    const ctx = initSplitImageAnimation(containerRef.current, columnsRef.current);
    const refresh = () => ScrollTrigger.refresh();

    requestAnimationFrame(refresh);

    const splitImages = Array.from(
      containerRef.current.querySelectorAll<HTMLImageElement>('.split-inner-img')
    );
    const pending = splitImages.filter((img) => !img.complete);
    pending.forEach((img) => {
      img.addEventListener('load', refresh);
      img.addEventListener('error', refresh);
    });

    return () => {
      pending.forEach((img) => {
        img.removeEventListener('load', refresh);
        img.removeEventListener('error', refresh);
      });
      ctx.revert();
    };
  }, []);

  // Create columns
  const columns = Array.from({ length: numColumns }).map((_, i) => {
    // Calculate position for the inner image to compensate for the column's offset
    // Each column effectively views a slice of the main image
    // If we have 4 columns, each is 25% wide.
    // The image inside needs to be 400% width of the column (assuming column is relative container)
    // And shifted left by i * 100% of the column width.
    
    return (
      <div 
        key={i}
        ref={(el) => { columnsRef.current[i] = el; }}
        className="h-full relative overflow-hidden"
        style={{ width: `${100 / numColumns}%`, height: '120%', marginTop: '-10%' }} // Expanded height for parallax movement
      >
        <div 
            className="absolute top-0 h-full w-[400%]" // 400% because parent is 25% of total
            style={{ 
                left: `-${i * 100}%`,
                width: `${numColumns * 100}%` 
            }}
        >
            <img 
                src={src} 
                alt={alt} 
                className="split-inner-img w-full h-full object-cover"
            />
        </div>
      </div>
    );
  });

  return (
    <div 
        ref={containerRef} 
        className={`flex flex-row overflow-hidden ${className}`}
        // The container handles the border radius clipping
        style={{ 
            borderRadius: 'inherit', 
            // Important for Safari to respect border radius with child transforms
            transform: 'translateZ(0)',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)'
        }} 
    >
      {columns}
    </div>
  );
}
