'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { useMobileNav } from '@/hooks/useMobileNav';
import { cn } from '@/libs/utils';
import {
  Contact01Icon,
  Home01Icon,
  MarketAnalysisIcon,
  ServiceIcon,
  UserCircleIcon,
} from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

const navItems = [
  { label: 'Home', href: '/', icon: Home01Icon },
  { label: 'About Us', href: '/about', icon: UserCircleIcon },
  { label: 'Services', href: '/services', icon: ServiceIcon },
  { label: 'Market Expansion', href: '/market-expansion', icon: MarketAnalysisIcon },
  { label: 'Contact Us', href: '/contact-us', icon: Contact01Icon },
];

export default function Header() {
  const pathname = usePathname();
  const { isOpen, toggleMenu, closeMenu } = useMobileNav();

  return (
    <header className="py-4 md:py-6 relative z-40">
      <div className="flex items-center justify-between gap-3">
        <nav className="hidden md:flex flex-wrap gap-x-4 gap-y-2 text-base uppercase tracking-widest text-[#2A3324]/70">
          {navItems.map((item, index) => (
            <React.Fragment key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  'inline-flex items-center gap-1.5 group transition-colors',
                  pathname === item.href ? 'text-[#2A3324]' : 'hover:text-[#2A3324]'
                )}
              >
                <HugeiconsIcon icon={item.icon} size={14} strokeWidth={1.9} color="currentColor" />
                {item.label}
              </Link>
              {index < navItems.length - 1 ? <span>/</span> : null}
            </React.Fragment>
          ))}
        </nav>

        <Link href="/" className="inline-flex items-center">
          <Image
            src="/logos/logo-dark.png"
            alt="Logis Dubai"
            width={172}
            height={94}
            priority
            className="w-[132px] md:w-[172px] h-auto object-contain"
          />
        </Link>

        <button
          type="button"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="md:hidden relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#2A3324]/25 bg-[#E3E7E0]/85 text-[#2A3324] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#DCE2DA]"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <span
            className={cn(
              'absolute block h-[1.5px] w-[18px] rounded-full bg-current transition-all duration-300 ease-out',
              isOpen ? 'translate-y-0 rotate-45' : '-translate-y-[6px] rotate-0'
            )}
          />
          <span
            className={cn(
              'absolute block h-[1.5px] w-[18px] rounded-full bg-current transition-all duration-300 ease-out',
              isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
            )}
          />
          <span
            className={cn(
              'absolute block h-[1.5px] w-[18px] rounded-full bg-current transition-all duration-300 ease-out',
              isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-[6px] rotate-0'
            )}
          />
        </button>
      </div>

      <div
        aria-hidden={!isOpen}
        className={cn(
          'md:hidden fixed inset-0 z-[80] transition-opacity duration-300',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
          className={cn(
            'absolute inset-0 bg-[#1B2318]/28 backdrop-blur-[3px] transition-opacity duration-300',
            isOpen ? 'opacity-100' : 'opacity-0'
          )}
        />

        <nav
          id="mobile-nav"
          className={cn(
            'absolute left-4 right-4 top-4 rounded-[2.5rem] border border-[#C4CFC0] bg-[#DCE2DA]/97 p-4 shadow-[0_24px_60px_rgba(30,42,26,0.2)] backdrop-blur-sm transition-all duration-400 ease-out',
            isOpen ? 'translate-y-0 scale-100 opacity-100' : '-translate-y-4 scale-[0.98] opacity-0'
          )}
        >
          <ul className="space-y-2.5">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={cn(
                  'transition-all duration-300 ease-out',
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
                )}
                style={{ transitionDelay: isOpen ? `${90 + index * 55}ms` : '0ms' }}
              >
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(
                    'w-full rounded-full px-4 py-3 text-sm uppercase tracking-[0.14em] inline-flex items-center justify-between transition-colors',
                    pathname === item.href
                      ? 'bg-[#2A3324] text-[#E3E7E0]'
                      : 'text-[#2A3324]/85 hover:bg-[#2A3324]/8'
                  )}
                >
                  <span className="inline-flex items-center gap-2">
                    <HugeiconsIcon icon={item.icon} size={15} strokeWidth={1.9} color="currentColor" />
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
