'use client';

import { useLayoutEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Use GSAP ticker to update Lenis for perfect sync
    function update(time: number) {
      lenis.raf(time * 1000);
    }
    
    gsap.ticker.add(update);

    // Disable built-in GSAP lag smoothing to prevent conflicts
    gsap.ticker.lagSmoothing(0);

    // Ensure triggers are correct after initial paint and full asset load.
    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);
    window.addEventListener('load', refresh);

    return () => {
      // Cleanup on unmount
      window.removeEventListener('load', refresh);
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
}
