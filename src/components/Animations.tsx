'use client';

import { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { initTextReveal, initTextFadeUp, initGeneralParallax } from '@/libs/gsapAnimations';

export default function Animations() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useLayoutEffect(() => {
    // Initialize animations via shared helper
    const ctxText = initTextReveal(containerRef);
    const ctxFadeUp = initTextFadeUp(containerRef);
    const ctxParallax = initGeneralParallax(containerRef);
    const refresh = () => ScrollTrigger.refresh();
    requestAnimationFrame(refresh);

    const imgs = Array.from(document.querySelectorAll('img'));
    const pending = imgs.filter((img) => !img.complete);
    pending.forEach((img) => {
      img.addEventListener('load', refresh);
      img.addEventListener('error', refresh);
    });

    return () => {
      ctxText.revert();
      ctxFadeUp.revert();
      ctxParallax.revert();
      pending.forEach((img) => {
        img.removeEventListener('load', refresh);
        img.removeEventListener('error', refresh);
      });

      // Restore original text for reveal elements (cleanup not handled by GSAP revert)
       const revealElements = document.querySelectorAll('.reveal-text');
       revealElements.forEach(el => {
         const originalHTML = el.getAttribute('data-original-text');
         if (originalHTML) el.innerHTML = originalHTML;
       });

      const fadeUpElements = document.querySelectorAll<HTMLElement>('.reveal-up');
      fadeUpElements.forEach((el) => {
        delete el.dataset.revealUpReady;
      });
    };
  }, [pathname]);

  return <div ref={containerRef} className="hidden" />;
}
