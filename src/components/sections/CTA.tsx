import React from 'react';
import Button from '../ui/Button';

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-[#E5E9E4] border border-[#C4CFC0] rounded-[2.25rem] md:rounded-[3rem] relative overflow-hidden">
      <div className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif-custom text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-tight">
            <span className="reveal-text block">Turn Returns Into</span>
            <span className="reveal-text block italic text-[#5C715E]">Opportunity</span>
          </h2>
          <p className="reveal-up font-sans-custom text-base md:text-xl text-[#2A3324]/80 mb-10 md:mb-12 max-w-2xl mx-auto px-2 sm:px-0">
            Partner with Logis Dubai to transform your reverse logistics from a cost center into a sustainable revenue stream.
          </p>
          <div className="reveal-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Button variant="primary" className="w-full max-w-[240px] sm:max-w-none sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg">
              Start Recovery
            </Button>
            <Button variant="outline" className="w-full max-w-[240px] sm:max-w-none sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base md:text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute left-0 top-0 w-full h-full opacity-5 pointer-events-none">
        <svg  viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full stroke-current text-[#2A3324]">
          <path d="M0,100 C20,80 50,20 100,0" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="0.5"/>
          <path d="M0,80 C30,60 70,40 100,20" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="0.5"/>
          <path d="M0,60 C40,40 60,60 100,40" fill="none" vectorEffect="non-scaling-stroke" strokeWidth="0.5"/>
        </svg>
      </div>
    </section>
  );
}
