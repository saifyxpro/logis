import React from 'react';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import Hero from '@/components/sections/Hero';
import Logos from '@/components/sections/Logos';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import ParallaxImage from '@/components/sections/ParallaxImage';
import Metrics from '@/components/sections/Metrics';
import CTA from '@/components/sections/CTA';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom font-light antialiased relative overflow-x-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="space-y-2 md:space-y-4">
          <Hero />
          <Logos />
          <About />
          <Services />
          <ParallaxImage />
          <Metrics />
          <CTA />
          <Contact />
        </main>
      </div>
      <Footer />
    </div>
  );
}
