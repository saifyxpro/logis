import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ExternalLinkIcon from '@/components/ui/ExternalLinkIcon';
import { InstagramIcon, Linkedin01Icon, TwitterIcon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const socialLinks = [
  { label: 'LinkedIn', href: '#', icon: Linkedin01Icon },
  { label: 'Twitter', href: '#', icon: TwitterIcon },
  { label: 'Instagram', href: '#', icon: InstagramIcon },
];

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Market Expansion', href: '/market-expansion' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service' },
  { label: 'Sitemap', href: '/sitemap' },
];

export default function Footer() {
  return (
    <footer className="bg-[#2A3324] text-[#E3E7E0] pt-16 md:pt-24 pb-10 relative z-20 rounded-t-[2.5rem] md:rounded-t-[3rem] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <div className="lg:col-span-5 bg-[#E3E7E0]/6 rounded-[2rem] p-7 md:p-9 reveal-up">
            <Link href="/" className="inline-flex items-center mb-5">
              <Image
                src="/logos/logo-white.png"
                alt="Logis Dubai"
                width={190}
                height={104}
                className="w-[138px] md:w-[190px] h-auto object-contain"
              />
            </Link>
            <h3 className="font-serif-custom text-3xl md:text-4xl leading-tight tracking-tight">
              Sustainable value recovery for modern global supply chains.
            </h3>
            <p className="text-sm text-[#E3E7E0]/70 mt-5 max-w-md">
              We convert reverse logistics complexity into profitable, circular operations for retailers and brands.
            </p>
            <div className="flex flex-wrap gap-3 mt-7">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="px-4 py-2 rounded-full bg-[#E3E7E0]/8 text-sm text-[#E3E7E0]/80 hover:bg-[#E3E7E0] hover:text-[#2A3324] transition-colors inline-flex items-center group"
                >
                  {social.label}
                  <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#E3E7E0]/32 bg-[#E3E7E0]/16 text-[#E3E7E0] transition-colors group-hover:border-[#2A3324] group-hover:bg-[#2A3324] group-hover:text-[#E3E7E0]">
                    <HugeiconsIcon icon={social.icon} size={12} strokeWidth={1.9} color="currentColor" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3 bg-[#E3E7E0]/4 rounded-[2rem] p-7 md:p-9 reveal-up">
            <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/50 mb-5">Navigation</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#E3E7E0]/78 hover:text-[#E3E7E0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 bg-[#5C715E]/20 rounded-[2rem] p-7 md:p-9 reveal-up">
            <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/50 mb-5">Contact</p>
            <p className="text-sm text-[#E3E7E0]/78 leading-relaxed">
              Logis Dubai Logistics Centre
              <br />
              Jebel Ali Free Zone
              <br />
              Dubai, UAE
            </p>
            <div className="mt-6 space-y-2">
              <a href="mailto:contact@logisdubai.com" className="inline-flex items-center group text-[#E3E7E0] hover:text-white transition-colors">
                contact@logisdubai.com
                <ExternalLinkIcon variant="light" />
              </a>
              <a href="tel:+97141234567" className="inline-flex items-center group text-[#E3E7E0] hover:text-white transition-colors">
                +971 4 123 4567
                <ExternalLinkIcon variant="light" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs uppercase tracking-wider text-[#E3E7E0]/45 reveal-up">
          <p>© 2026 Logis Dubai. All rights reserved.</p>
          <p>Built for circular logistics operations</p>
        </div>
      </div>
    </footer>
  );
}
