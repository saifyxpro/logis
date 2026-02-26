import React from 'react';
import SplitImage from '../ui/SplitImage';
import ArrowIcon from '../ui/ArrowIcon';
import PillArrowIcon from '../ui/PillArrowIcon';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-[#C4CFC0]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
        <div className="md:col-span-8">
          <h2 className="reveal-text font-serif-custom text-3xl sm:text-5xl md:text-6xl tracking-tight font-normal leading-tight pr-0 md:pr-12">
             Global Reverse Logistics, Reimagined. We operate the largest marketplace in the Middle East for surplus assets.
          </h2>
          <div className="mt-8">
            <a href="#" className="reveal-up pill-link">
              Our Methodology
              <PillArrowIcon />
            </a>
          </div>
        </div>
        <div className="md:col-span-4 reveal-up">
          <p className="max-w-[34ch] text-base md:text-[1.08rem] text-[#2A3324]/80 leading-relaxed">
            We partner with the world’s leading retailers, including Amazon, Walmart, and Target, to solve the massive challenge of reverse logistics. By acquiring returned merchandise at significant value, we extend the lifecycle of products that would otherwise end up in landfills. Our robust infrastructure collects, sorts, and redistributes goods from the US to high-demand markets across Pakistan, India, and Africa.
          </p>

          {/* Detail Image with Layered Depth */}
          <div className="relative w-full h-44 sm:h-48 mt-6 md:mt-8 group cursor-pointer z-10">
             {/* Background Decoration */}
             <div className="absolute inset-0 bg-[#5C715E]/20 rounded-[2.5rem] transform translate-x-2 translate-y-2 -z-10 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
             
             <div className="w-full h-full rounded-[2.5rem] overflow-hidden bg-[#D5DBD1] border border-[#2A3324]/10 relative parallax-about-container" style={{ WebkitMaskImage: '-webkit-radial-gradient(white, black)', maskImage: 'radial-gradient(white, black)', transform: 'translateZ(0)' }}>
               <SplitImage 
                 src="/images/home/about-supply-chain-optimization.png" 
                 alt="Supply chain optimization"
                 className="w-full h-full rounded-[2.5rem]"
               />
             </div>

             <div className="absolute top-2 right-2 bg-[#2A3324] text-[#E3E7E0] p-2 rounded-full group-hover:bg-[#5C715E] transition-colors flex items-center justify-center z-20 shadow-md">
              <ArrowIcon direction="right" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
