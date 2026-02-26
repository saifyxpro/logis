import React from 'react';

export default function ParallaxImage() {
  return (
    <section className="py-8 border-t border-[#C4CFC0]">
      <div className="relative w-full h-[380px] sm:h-[500px] md:h-[700px] flex items-center justify-center text-center overflow-hidden parallax-container rounded-[2.5rem]">
        <div className="absolute inset-0 z-0 h-[130%] -top-[15%] w-full parallax-img">
          <img 
            src="/images/home/parallax-seamless-global-operations.png" 
            alt="Logistics warehouse" 
            className="w-full h-full object-cover brightness-75" 
          />
        </div>
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#101712]/40 via-[#101712]/14 to-[#101712]/42" />
        <div className="relative z-10 text-[#E3E7E0] px-4">
          <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] md:tracking-widest mb-3 md:mb-4 block [text-shadow:0_2px_10px_rgba(10,14,12,0.52)]">Logis Dubai</span>
          <h2 className="font-serif-custom text-4xl sm:text-5xl md:text-7xl lg:text-8xl tracking-tight font-normal leading-tight [text-shadow:0_6px_24px_rgba(10,14,12,0.56)]">
            <span className="reveal-text block">Seamless Global</span>
            <span className="reveal-text block">Operations</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
