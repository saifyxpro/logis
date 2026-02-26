import React from 'react';

const logos = [
  { name: 'Amazon', src: '/logos/amazon.svg', logoClass: 'h-10 md:h-12' },
  { name: 'Costco', src: '/logos/costco.svg', logoClass: 'h-10 md:h-12' },
  { name: 'Target', src: '/logos/target.svg', logoClass: 'h-9 md:h-11' },
  { name: 'The Home Depot', src: '/logos/the-home-depot.svg', logoClass: 'h-11 md:h-14' },
  { name: 'Walmart', src: '/logos/walmart.svg', logoClass: 'h-10 md:h-12' },
  { name: 'Wayfair', src: '/logos/wayfair.svg', logoClass: 'h-10 md:h-12' },
];

export default function Logos() {
  const loopedLogos = [...logos, ...logos];

  return (
    <section className="py-12 border-t border-[#C4CFC0] overflow-hidden">
      <p className="reveal-text text-base text-[#2A3324]/60 uppercase tracking-widest mb-8 text-center md:text-left">
        Trusted by Global Retail Leaders
      </p>
      <div className="w-full relative reveal-up overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-24 bg-gradient-to-r from-[#E3E7E0] via-[#E3E7E0]/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-24 bg-gradient-to-l from-[#E3E7E0] via-[#E3E7E0]/85 to-transparent" />

        <div className="marquee-viewport py-1">
          <div className="marquee-track flex items-center gap-12 md:gap-16 opacity-80">
            {loopedLogos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="flex items-center justify-center shrink-0">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`w-auto object-contain ${logo.logoClass}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
