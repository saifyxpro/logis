import React from 'react';
import ArrowIcon from '../ui/ArrowIcon';
import ExternalLinkIcon from '../ui/ExternalLinkIcon';
import ContactDropdown from '../ui/ContactDropdown';

export default function Contact() {
  return (
    <section className="py-16 md:py-24 border-t border-[#C4CFC0]" id="contact">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        <div className="flex flex-col reveal-up">
          <span className="text-xs sm:text-sm md:text-base uppercase tracking-[0.16em] md:tracking-widest text-[#2A3324]/70 block mb-4 md:mb-6">Connect</span>
          <h2 className="font-serif-custom text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-normal leading-tight mb-8 md:mb-12">
            <span className="reveal-text block">Start Your</span>
            <span className="reveal-text block">Sustainability Journey.</span>
          </h2>
          <div className="flex flex-col gap-8 mt-auto">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2A3324]/50 mb-2">Global Headquarters</p>
              <p className="text-base md:text-lg">Logis Dubai Logistics Centre<br />Jebel Ali Free Zone<br />Dubai, UAE</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2A3324]/50 mb-2">Direct Communications</p>
              <a href="mailto:contact@logisdubai.com" className="text-base md:text-lg inline-flex items-center group hover:opacity-70 transition-opacity break-all">
                contact@logisdubai.com
                <ExternalLinkIcon />
              </a>
              <a href="tel:+97141234567" className="text-base md:text-lg inline-flex items-center group hover:opacity-70 transition-opacity mt-1">
                +971 4 123 4567
                <ExternalLinkIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#D5DBD1] p-6 sm:p-8 md:p-12 border-t-2 border-[#2A3324] flex flex-col justify-center rounded-[2.5rem] reveal-up">
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <div className="space-y-2">
              <label htmlFor="name" className="contact-label">Full Name</label>
              <input type="text" id="name" className="contact-input" placeholder="Your full name" />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="contact-label">Email Address</label>
              <input type="email" id="email" className="contact-input" placeholder="name@company.com" />
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry-type" className="contact-label">Inquiry Type</label>
              <ContactDropdown
                id="inquiry-type"
                placeholder="Select inquiry type"
                options={[
                  { value: 'surplus-recovery', label: 'Surplus Recovery' },
                  { value: 'market-expansion', label: 'Market Expansion' },
                  { value: 'brand-compliance', label: 'Brand Compliance' },
                  { value: 'partnership', label: 'Partnership' },
                ]}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="preferred-market" className="contact-label">Preferred Market</label>
              <ContactDropdown
                id="preferred-market"
                placeholder="Select preferred market"
                options={[
                  { value: 'uae', label: 'UAE' },
                  { value: 'pakistan', label: 'Pakistan' },
                  { value: 'india', label: 'India' },
                  { value: 'africa', label: 'Africa' },
                  { value: 'multi', label: 'Multi-Region' },
                ]}
              />
            </div>

            <div className="space-y-2 sm:col-span-2">
              <label htmlFor="message" className="contact-label">Message</label>
              <textarea id="message" rows={4} className="contact-textarea" placeholder="Tell us about your inventory profile and goals." />
            </div>

            <button type="button" className="mt-2 sm:col-span-2 bg-[#2A3324] text-[#E3E7E0] py-4 px-6 text-sm uppercase tracking-widest hover:bg-[#5C715E] transition-colors flex justify-between items-center w-full group rounded-[2.5rem]">
              Send Message
              <ArrowIcon
                direction="right"
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
