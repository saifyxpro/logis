import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Ensures GSAP plugins are registered.
 */
const ensurePluginRegistration = () => {
    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
}

/**
 * Initializes the Split Image GSAP animation.
 * 
 * @param container The main container element for the split image component.
 * @param columns An array of column div elements to animate.
 * @returns A GSAP Context object that should be reverted on cleanup.
 */
export const initSplitImageAnimation = (
  container: HTMLDivElement,
  columns: (HTMLDivElement | null)[]
): gsap.Context => {
  ensurePluginRegistration();

  const ctx = gsap.context(() => {
    // Animate columns - Stagger/Parallax effect
    columns.forEach((col) => {
      if (!col) return;
      
      gsap.fromTo(col, 
        { yPercent: -5 }, // Start slightly up
        {
          yPercent: 5,   // End slightly down
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true,
          }
        }
      );
    });

    // Scale the inner image slightly for depth
    const innerImages = container.querySelectorAll('.split-inner-img');
    gsap.fromTo(innerImages,
      { scale: 1.1 },
      {
        scale: 1.15,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        }
      }
    );

  }, container);

  return ctx;
};


/**
 * Initializes Text Reveal animation for elements with class .reveal-text
 */
export const initTextReveal = (scope?: HTMLElement | React.RefObject<HTMLElement | null | undefined>): gsap.Context => {
  ensurePluginRegistration();

  return gsap.context(() => {
      const revealElements = document.querySelectorAll('.reveal-text');
      revealElements.forEach(el => {
        // Skip if already processed to avoid duplication
        if (el.querySelector('.reveal-word')) return;

        const html = el.innerHTML;
        const text = (el as HTMLElement).innerText;
        el.setAttribute('data-original-text', html);
        
        el.innerHTML = '';
        const words = text.trim().split(/\s+/).filter(Boolean);
        words.forEach((word, index) => {
          const wrapper = document.createElement('span');
          wrapper.className = 'inline-block overflow-hidden align-bottom';
          if (index < words.length - 1) {
            wrapper.style.marginRight = '0.25em';
          }
          // Use proportional buffer so serif descenders (g, y, p, q) never get clipped at large sizes.
          wrapper.style.paddingBottom = '0.16em';
          wrapper.style.marginBottom = '-0.16em';
          const inner = document.createElement('span');
          inner.className = 'inline-block translate-y-[110%] reveal-word';
          inner.innerText = word;
          wrapper.appendChild(inner);
          el.appendChild(wrapper);
        });

        gsap.to(el.querySelectorAll('.reveal-word'), {
          y: '0%',
          duration: 0.8,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });
  }, scope);
};

/**
 * Initializes fade-up text animation for elements with class .reveal-up
 */
export const initTextFadeUp = (scope?: HTMLElement | React.RefObject<HTMLElement | null | undefined>): gsap.Context => {
  ensurePluginRegistration();

  return gsap.context(() => {
    const fadeUpElements = document.querySelectorAll<HTMLElement>('.reveal-up');

    fadeUpElements.forEach((el) => {
      if (el.dataset.revealUpReady === 'true') return;
      el.dataset.revealUpReady = 'true';

      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, scope);
};


/**
 * Initializes general Parallax animation for elements with specified classes
 */
export const initGeneralParallax = (scope?: HTMLElement | React.RefObject<HTMLElement | null | undefined>): gsap.Context => {
  ensurePluginRegistration();

  return gsap.context(() => {
      // Standard parallax for non-split images
      const parallaxSelectors = [
        '.parallax-container',
        // Removed specific hero/metrics selectors as they will use SplitImage component now
        '.parallax-container-sm'
      ];
      
      const parallaxContainers = document.querySelectorAll(parallaxSelectors.join(','));
      parallaxContainers.forEach(container => {
        // Prefer dedicated parallax layers first, then fallback to plain img.
        const img =
          container.querySelector('.parallax-img') ||
          container.querySelector('.parallax-img-sm') ||
          container.querySelector('img');
        
        if (img) {
          gsap.fromTo(img,
            { y: '-10%' },
            {
              y: '10%',
              ease: 'none',
              scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
                invalidateOnRefresh: true
              }
            }
          );
        }
      });
  }, scope);
};
