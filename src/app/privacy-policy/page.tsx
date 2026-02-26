import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import { constructMetadata } from '@/libs/seo';

export const metadata = constructMetadata({
  title: 'Privacy Policy',
  description: 'Our commitment to protecting your data and privacy.',
});

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="py-16 md:py-24 max-w-3xl mx-auto">
          <h1 className="font-serif-custom text-4xl md:text-5xl mb-8">Privacy Policy</h1>
          <p className="text-sm uppercase tracking-widest text-[#2A3324]/60 mb-12">Last Updated: February 26, 2026</p>
          
          <div className="prose prose-stone prose-lg text-[#2A3324]/80">
            <p className="lead">
              At Logis Dubai, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you interact with our services.
            </p>

            <h3>1. Information We Collect</h3>
            <p>
              We collect information you provide directly to us (such as contact forms) and usage data via cookies to improve our sustainable logistics platform.
            </p>

            <h3>2. How We Use Your Data</h3>
            <p>
              Your data is used solely to facilitate business logistics, provide quoted services, and improve our digital offerings. We do not sell your personal data to third parties.
            </p>

            <h3>3. Data Security</h3>
            <p>
              We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure.
            </p>

             <h3>4. Contact Us</h3>
            <p>
              For any privacy-related inquiries, please contact our Data Protection Officer at privacy@logisdubai.com.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
