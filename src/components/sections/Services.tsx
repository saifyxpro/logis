import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import ArrowIcon from '../ui/ArrowIcon';
import PillArrowIcon from '../ui/PillArrowIcon';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 border-t border-[#C4CFC0]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-up">
        <div>
          <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] md:tracking-widest text-[#2A3324]/70 block mb-4 md:mb-6">Our Impact</span>
          <h2 className="font-serif-custom text-3xl sm:text-4xl md:text-5xl tracking-tight font-normal">
            <span className="reveal-text block">Sustainability Through</span>
            <span className="reveal-text block">Strategic Liquidation</span>
          </h2>
        </div>
        <Link href="/services" className="mt-6 md:mt-0 pill-link">
          View Impact Report
          <PillArrowIcon />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Environmental */}
        <div className="reveal-up bg-[#D5DBD1] p-6 sm:p-8 md:p-10 flex flex-col h-full border-t-2 border-[#2A3324] rounded-[2.5rem]">
          <span className="text-base md:text-lg font-normal text-[#2A3324]/50 mb-5 md:mb-6">01 Environmental</span>
          <h3 className="font-serif-custom text-2xl md:text-3xl tracking-tight font-normal mb-6 md:mb-8 pr-0 md:pr-8 leading-tight">
            <span className="reveal-text block">Circular</span>
            <span className="reveal-text block">Economy</span>
            <span className="reveal-text block">Champions</span>
          </h3>
          <div className="mt-auto">
            <p className="text-base md:text-lg text-[#2A3324]/70 mb-6 md:mb-8">
              We diverting millions of tons from landfills by extending product lifecycles and reintroducing goods into the global market.
            </p>
            <div className="flex justify-start">
              <Button variant="primary">
                <ArrowIcon direction="right" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Social */}
        <div className="reveal-up bg-[#D5DBD1] p-6 sm:p-8 md:p-10 flex flex-col h-full border-t-2 border-[#5C715E] rounded-[2.5rem]">
          <span className="text-base md:text-lg font-normal text-[#2A3324]/50 mb-5 md:mb-6">02 Social</span>
          <h3 className="font-serif-custom text-2xl md:text-3xl tracking-tight font-normal mb-6 md:mb-8 pr-0 md:pr-8 leading-tight">
            <span className="reveal-text block">Democratizing</span>
            <span className="reveal-text block">Access to</span>
            <span className="reveal-text block">Quality</span>
          </h3>
          <div className="mt-auto">
            <p className="text-base md:text-lg text-[#2A3324]/70 mb-6 md:mb-8">
              Bridging the gap for emerging markets in Pakistan, India, and Africa by providing access to premium goods at affordable prices.
            </p>
            <div className="flex justify-end">
              <Button variant="secondary">
                <ArrowIcon direction="right" size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Governance */}
        <div className="reveal-up bg-[#D5DBD1] p-6 sm:p-8 md:p-10 flex flex-col h-full border-t-2 border-[#2A3324] rounded-[2.5rem]">
          <span className="text-base md:text-lg font-normal text-[#2A3324]/50 mb-5 md:mb-6">03 Governance</span>
          <h3 className="font-serif-custom text-2xl md:text-3xl tracking-tight font-normal mb-6 md:mb-8 pr-0 md:pr-8 leading-tight">
            <span className="reveal-text block">Brand</span>
            <span className="reveal-text block">Protection</span>
            <span className="reveal-text block">&amp; Compliance</span>
          </h3>
          <div className="mt-auto">
            <p className="text-base md:text-lg text-[#2A3324]/70 mb-6 md:mb-8">
              Rigorous data destruction, de-branding protocols, and full traceability ensure your brand equity and legal compliance are never compromised.
            </p>
            <div className="flex justify-end">
              <Button variant="secondary">
                <ArrowIcon direction="right" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
