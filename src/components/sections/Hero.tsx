import React from 'react';
import SplitImage from '../ui/SplitImage';
import ArrowIcon from '../ui/ArrowIcon';
import PillArrowIcon from '../ui/PillArrowIcon';

export default function Hero() {
  return (
    <section className="pt-12 pb-10 sm:pt-16 md:pt-24 md:pb-16 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative z-10">
        <h1 className="font-serif-custom text-[clamp(2.65rem,12vw,4.8rem)] sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight font-normal w-full md:w-3/4">
          <span className="reveal-text block">Your Gateway to</span>
          <span className="block">
            <span className="reveal-text italic pr-4">Sustainable</span>{' '}
            <span className="reveal-text">Liquidation In the Middle East</span>
          </span>
        </h1>

        <div className="reveal-up mt-8 md:mt-0 md:w-1/4 flex flex-col items-start md:items-end text-left md:text-right">
          <a href="#contact" className="pill-link pill-link-toggle-solid mb-6">
            Partner With Us
            <PillArrowIcon variant="solid" />
          </a>
          {/* Updated Hero Image Container with Enhanced Border and Layering for better visual depth */}
          <div className="relative w-40 h-32 md:w-48 md:h-40 group cursor-pointer z-10">
            {/* Background Layer (Border/Frame Effect) */}
            <div className="absolute inset-0 bg-[#E3E7E0] rounded-[2.5rem] border border-[#2A3324]/10 transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"></div>
            
            {/* Image Container */}
            <div className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-[#2A3324]/20 bg-[#D5DBD1]" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)', maskImage: 'radial-gradient(white, black)', transform: 'translateZ(0)' }}>
              <div className="absolute inset-0 w-full h-full parallax-container-sm">
                 <img src="/images/home/hero-detail-image.png" alt="Logistics operations" className="w-full h-[120%] -mt-[10%] object-cover transition-transform duration-700 group-hover:scale-105 parallax-img-sm" />
              </div>
            </div>

            <div className="absolute bottom-2 left-2 bg-[#2A3324] text-[#E3E7E0] p-1 rounded-full flex items-center justify-center z-10 shadow-lg">
              <ArrowIcon direction="right" size={16} />
            </div>
          </div>
          <p className="text-sm mt-4 text-[#2A3324]/70 text-left">
            LogisDubai bridges the gap between US retail surplus and emerging markets. We power the global circular economy by transforming excess inventory into opportunity.
          </p>
        </div>
      </div>

      <div className="reveal-up flex flex-wrap justify-between items-center gap-x-4 gap-y-2 py-4 border-y border-[#C4CFC0] text-[11px] sm:text-xs md:text-base uppercase tracking-[0.16em] md:tracking-widest text-[#2A3324]/70">
        <span className="w-full sm:w-auto">Global Returns Solutions</span>
        <span className="hidden sm:block">Since 2021</span>
        <span className="w-full sm:w-auto sm:text-right">Circular Economy</span>
      </div>

      {/* Updated Large Hero Image with Parallax Depth Effects */}
      <div className="mt-8 w-full h-[320px] sm:h-[420px] md:h-[600px] lg:h-[700px] relative">
        {/* Decorative Background Frame */}
        <div className="hidden lg:block absolute inset-0 bg-transparent border border-[#2A3324]/30 rounded-[3rem] transform translate-x-4 translate-y-4 -z-10 w-full h-full"></div>

        {/* Masked Image Container */}
        <div className="w-full h-full relative rounded-[3rem] overflow-hidden shadow-2xl bg-[#D5DBD1]" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)', maskImage: 'radial-gradient(white, black)', transform: 'translateZ(0)' }}>
           <SplitImage 
             src="/images/home/hero-main-banner.png" 
             alt="Sustainable logistics facility"
             className="w-full h-full rounded-[3rem]"
           />
           
           <div className="absolute inset-0 bg-gradient-to-t from-[#141b12]/62 via-[#1c2518]/24 to-transparent pointer-events-none"></div>

           <div className="absolute inset-0 flex items-end p-3 sm:p-6 md:p-8 lg:p-10 pointer-events-none">
            <div className="reveal-up w-full max-w-2xl px-1 sm:px-2 text-[#E3E7E0] text-clarity-blur">
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E3E7E0]/70 mb-3">
                Global Recovery Flow
              </p>
              <h3 className="font-serif-custom text-xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
                Recover, Refine, Redistribute
              </h3>
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-[#E3E7E0]/88 max-w-xl leading-relaxed">
                From US return centers to high-demand markets, each shipment is graded, tracked, and reintroduced through controlled circular channels.
              </p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-[#E3E7E0]/14 text-[11px] sm:text-xs uppercase tracking-wider text-[#E3E7E0]/92">Traceability</span>
                <span className="px-3 py-1 rounded-full bg-[#E3E7E0]/14 text-[11px] sm:text-xs uppercase tracking-wider text-[#E3E7E0]/92">Quality Grading</span>
                <span className="px-3 py-1 rounded-full bg-[#E3E7E0]/14 text-[11px] sm:text-xs uppercase tracking-wider text-[#E3E7E0]/92">Circular Distribution</span>
              </div>
            </div>
           </div>
        </div>
      </div>

      <div className="reveal-up flex flex-wrap justify-between items-center gap-3 py-3">
        <span className="pill-label glass-pill">
          Our Impact
        </span>
        <a href="#about" className="pill-link glass-pill-link">
          See Methodology
          <PillArrowIcon />
        </a>
      </div>
    </section>
  );
}
