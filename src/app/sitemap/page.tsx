import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { constructMetadata } from '@/libs/seo';
import Link from 'next/link';
import ExternalLinkIcon from '@/components/ui/ExternalLinkIcon';

export const metadata = constructMetadata({
  title: 'Sitemap',
  description: 'Navigate the Logis Dubai website.',
});

export default function Sitemap() {
  const routes = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Market Expansion', path: '/market-expansion' },
    { title: 'Contact Us', path: '/contact-us' },
    { title: 'Privacy Policy', path: '/privacy-policy' },
    { title: 'Terms of Service', path: '/terms-of-service' },
  ];

  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-16 md:py-24 max-w-3xl mx-auto">
          <h1 className="font-serif-custom text-4xl md:text-5xl mb-12">Sitemap</h1>
          
          <ul className="space-y-6">
            {routes.map((route) => (
              <li key={route.path} className="border-b border-[#2A3324]/10 pb-4">
                <Link href={route.path} className="text-xl md:text-2xl text-[#2A3324] hover:text-[#5C715E] transition-colors flex justify-between items-center group">
                  <span className="font-serif-custom">{route.title}</span>
                  <span className="text-sm font-sans uppercase tracking-widest text-[#2A3324]/40 group-hover:text-[#5C715E] transition-colors inline-flex items-center">
                    Visit
                    <ExternalLinkIcon className="!ml-3" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
      <Footer />
    </div>
  );
}
