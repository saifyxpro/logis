import React from 'react';
import SplitImage from '../ui/SplitImage';

export default function Metrics() {
  return (
    <section className="py-16 md:py-24 border-t border-[#C4CFC0]">
      <div className="flex justify-end mb-8 reveal-up">
        <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] md:tracking-widest text-[#2A3324]/70">The Impact</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
        <div className="reveal-up">
          <p className="max-w-[38ch] text-base md:text-lg text-[#2A3324]/80 leading-relaxed lg:pr-8">
            The environmental cost of modern convenience is staggering. We provide a sustainable exit strategy for the massive volume of returns generating waste today, helping eCommerce giants like Amazon and Walmart solve a multi-billion dollar problem.
          </p>

          {/* Parallax Stats Image - With Enhanced Frame and Depth */}
          <div className="relative w-full max-w-[680px] h-52 sm:h-64 md:h-72 mt-8 md:mt-10 rounded-[2.5rem] group z-10 mx-auto lg:mx-0">
             {/* Offset Border Frame */}
             <div className="absolute inset-0 border-2 border-[#2A3324]/30 rounded-[2.5rem] translate-x-2 sm:translate-x-3 translate-y-2 sm:translate-y-3 -z-10 bg-transparent"></div>
             
             {/* Main Image Container */}
             <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#D5DBD1] shadow-xl relative parallax-metrics-container" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)', maskImage: 'radial-gradient(white, black)', transform: 'translateZ(0)' }}>
               <SplitImage 
                src="/images/home/services-home-featured-visual.png" 
                alt="Global logistics network" 
                className="w-full h-full rounded-[2.5rem]"
               />
            </div>
          </div>
        </div>

        <div className="reveal-up">
          <h2 className="font-serif-custom text-3xl sm:text-4xl md:text-5xl tracking-tight font-normal mb-8 md:mb-12">
            <span className="reveal-text block">Solving the $761 Billion</span>
            <span className="reveal-text block">Returns Crisis</span>
          </h2>

          <div className="flex flex-col text-base md:text-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0]">
              <span className="text-[#2A3324]/70">Merchandise Returned (2021)</span>
              <span className="font-normal sm:text-right">$761 Billion</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0]">
              <span className="text-[#2A3324]/70">Carbon Emissions (Annual)</span>
              <span className="font-normal sm:text-right">16 Million Metric Tons</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0]">
              <span className="text-[#2A3324]/70">Landfill Waste (Annual)</span>
              <span className="font-normal sm:text-right">5.8 Billion Pounds</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0]">
              <span className="text-[#2A3324]/70">Our Role</span>
              <span className="font-normal sm:text-right">Circular Economy Enabler</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0]">
              <span className="text-[#2A3324]/70">Supply Chain Model</span>
              <span className="font-normal sm:text-right">Zero-Waste Value Chains</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0]">
              <span className="text-[#2A3324]/70">Market Reach</span>
              <span className="font-normal sm:text-right">UAE, Pakistan, India, Africa</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-4 py-4 md:py-5 border-t border-[#C4CFC0] border-b">
              <span className="text-[#2A3324]/70">Cost Savings</span>
              <span className="font-normal sm:text-right">Significant Asset Recovery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
