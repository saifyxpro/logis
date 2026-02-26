import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { constructMetadata } from '@/libs/seo';
import ExternalLinkIcon from '@/components/ui/ExternalLinkIcon';
import ContactDropdown from '@/components/ui/ContactDropdown';

export const metadata = constructMetadata({
  title: 'Contact Us',
  description:
    'Talk to Logis Dubai about surplus inventory recovery, international market expansion, and reverse logistics operations.',
});

export default function ContactUsPage() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="py-10 md:py-16 space-y-14 md:space-y-20">
          <section className="relative rounded-[2.5rem] overflow-hidden min-h-[280px] md:min-h-[400px] reveal-up">
            <img
              src="/images/contact/contact-hero.png"
              alt="Logistics command center with global operations dashboards"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2216]/78 via-[#1A2216]/34 to-[#1A2216]/8" />
            <div className="relative z-10 p-7 md:p-12 lg:p-14 max-w-3xl text-[#E3E7E0] text-clarity-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/75 mb-4">Contact Us</p>
              <h1 className="font-serif-custom text-4xl md:text-6xl leading-tight tracking-tight">
                Let us build your surplus recovery roadmap
              </h1>
              <p className="mt-5 text-base md:text-xl text-[#E3E7E0]/90">
                Share your inventory challenge and we will design a practical, market-ready execution plan.
              </p>
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
            <div className="lg:col-span-5 reveal-up">
              <h2 className="font-serif-custom text-3xl md:text-5xl tracking-tight leading-tight">Speak with our operations team</h2>
              <p className="mt-5 text-lg text-[#2A3324]/80 leading-relaxed">
                Whether you are evaluating international surplus channels or optimizing existing returns flow, we can help you move from
                uncertainty to a clear commercial model.
              </p>

              <div className="mt-8 space-y-7">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/55 mb-2">Global Headquarters</p>
                  <p className="text-[#2A3324]/85 leading-relaxed">
                    Logis Dubai Logistics Centre
                    <br />
                    Jebel Ali Free Zone
                    <br />
                    Dubai, UAE
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/55 mb-2">US Office</p>
                  <p className="text-[#2A3324]/85 leading-relaxed">
                    Houston, Texas
                    <br />
                    United States
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/55 mb-2">Direct Communication</p>
                  <a href="mailto:contact@logisdubai.com" className="inline-flex items-center group text-[#2A3324]/90 hover:opacity-70 transition-opacity">
                    contact@logisdubai.com
                    <ExternalLinkIcon />
                  </a>
                  <a href="tel:+97141234567" className="inline-flex items-center group text-[#2A3324]/90 hover:opacity-70 transition-opacity mt-1">
                    +971 4 123 4567
                    <ExternalLinkIcon />
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 reveal-up">
              <div className="bg-[#D5DBD1] rounded-[2.5rem] p-7 md:p-10 border-t-2 border-[#2A3324]">
                <h3 className="font-serif-custom text-2xl md:text-3xl tracking-tight">Start the conversation</h3>
                <p className="mt-3 text-[#2A3324]/75">
                  Tell us about your inventory profile, preferred markets, and timelines.
                </p>

                <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  <div className="md:col-span-1 space-y-2">
                    <label htmlFor="name" className="contact-label">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      className="contact-input"
                    />
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <label htmlFor="email" className="contact-label">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      className="contact-input"
                    />
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <label htmlFor="company" className="contact-label">Company</label>
                    <input
                      id="company"
                      type="text"
                      className="contact-input"
                    />
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <label htmlFor="focus" className="contact-label">Primary Focus</label>
                    <ContactDropdown
                      id="focus"
                      placeholder="Select an option"
                      options={[
                        { value: 'surplus-recovery-strategy', label: 'Surplus Recovery Strategy' },
                        { value: 'market-expansion-planning', label: 'Market Expansion Planning' },
                        { value: 'distribution-and-channel-support', label: 'Distribution and Channel Support' },
                        { value: 'brand-protection-and-compliance', label: 'Brand Protection and Compliance' },
                      ]}
                    />
                  </div>

                  <div className="md:col-span-1 space-y-2">
                    <label htmlFor="volume" className="contact-label">Monthly Surplus Volume</label>
                    <ContactDropdown
                      id="volume"
                      placeholder="Select volume range"
                      options={[
                        { value: 'under-1000', label: 'Under 1,000 units' },
                        { value: '1000-to-5000', label: '1,000 to 5,000 units' },
                        { value: '5000-to-20000', label: '5,000 to 20,000 units' },
                        { value: '20000-plus', label: '20,000 plus units' },
                      ]}
                    />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <label htmlFor="message" className="contact-label">Project Details</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="contact-textarea"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="button"
                      className="w-full sm:w-auto px-8 py-4 rounded-[2.5rem] bg-[#2A3324] text-[#E3E7E0] text-sm uppercase tracking-widest hover:bg-[#5C715E] transition-colors"
                    >
                      Submit Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
