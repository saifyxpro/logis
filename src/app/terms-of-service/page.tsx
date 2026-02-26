import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { constructMetadata } from '@/libs/seo';

export const metadata = constructMetadata({
  title: 'Terms of Service',
  description: 'Understand the terms and conditions for using Logis Dubai services.',
});

export default function TermsOfService() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-16 md:py-24 max-w-3xl mx-auto">
          <h1 className="font-serif-custom text-4xl md:text-5xl mb-8">Terms of Service</h1>
          <p className="text-sm uppercase tracking-widest text-[#2A3324]/60 mb-12">Last Updated: February 26, 2026</p>
          
          <div className="prose prose-stone prose-lg text-[#2A3324]/80">
            <p className="lead">
              Welcome to Logis Dubai. By accessing or using our website and services, you agree to be bound by these Terms of Service.
            </p>

            <h3>1. Use of Services</h3>
            <p>
              You agree to use our services only for lawful purposes related to logistics, asset recovery, and sustainable business practices. Unauthorized use, including spamming or data scraping, is strictly prohibited.
            </p>

            <h3>2. Intellectual Property</h3>
            <p>
              All content, trademarks, and intellectual property on this site are owned by Logis Dubai or its licensors. You may not reproduce or distribute any content without written permission.
            </p>

            <h3>3. Limitation of Liability</h3>
            <p>
              Logis Dubai provides services &ldquo;as is&rdquo; without any warranties, express or implied. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
            </p>

             <h3>4. Changes to Terms</h3>
            <p>
              We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the modified terms.
            </p>

            <h3>5. Governing Law</h3>
            <p>
              These terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved in the courts of Dubai.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
