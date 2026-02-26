import React from 'react';

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 border-t border-[#C4CFC0]">
      <div className="mb-12 md:mb-16">
        <span className="text-base uppercase tracking-widest text-[#2A3324]/70">Client Perspectives</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <div className="flex flex-col h-full">
          <p className="font-serif-custom text-2xl lg:text-3xl tracking-tight font-normal italic mb-8 flex-grow">
            &ldquo;Vanguardis transformed our operational brief into a physical reality that exceeds all structural and aesthetic expectations.&rdquo;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover shadow-sm" crossOrigin="anonymous" />
            <div>
              <p className="text-sm uppercase tracking-widest text-[#2A3324] font-normal">Elena Rostova</p>
              <p className="text-xs uppercase tracking-widest text-[#2A3324]/60">Director, Nexus Corp</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <p className="font-serif-custom text-2xl lg:text-3xl tracking-tight font-normal italic mb-8 flex-grow">
            &ldquo;Their approach to passive thermal systems reduced our energy overhead drastically, without compromising the minimalist aesthetic we demanded.&rdquo;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover shadow-sm" crossOrigin="anonymous" />
            <div>
              <p className="text-sm uppercase tracking-widest text-[#2A3324] font-normal">Marcus Lin</p>
              <p className="text-xs uppercase tracking-widest text-[#2A3324]/60">Founder, Aura Developments</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col h-full">
          <p className="font-serif-custom text-2xl lg:text-3xl tracking-tight font-normal italic mb-8 flex-grow">
            &ldquo;Uncompromising precision. The entire lifecycle planning executed by their studio was flawless from the initial sketches to deployment.&rdquo;
          </p>
          <div className="flex items-center gap-4 pt-6 border-t border-[#C4CFC0]/60 mt-auto">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=150&amp;h=150&amp;auto=format&amp;fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover shadow-sm" crossOrigin="anonymous" />
            <div>
              <p className="text-sm uppercase tracking-widest text-[#2A3324] font-normal">Sarah Jenkins</p>
              <p className="text-xs uppercase tracking-widest text-[#2A3324]/60">VP Operations, Meridian</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
