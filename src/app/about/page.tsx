import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { constructMetadata } from '@/libs/seo';
import LayeredImageCard from '@/components/ui/LayeredImageCard';

export const metadata = constructMetadata({
  title: 'About Us',
  description:
    'Learn how Logis Dubai helps retailers turn surplus inventory into measurable commercial and environmental impact.',
});

export default function AboutPage() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="py-10 md:py-16 space-y-14 md:space-y-20">
          <section className="relative rounded-[2.5rem] overflow-hidden min-h-[290px] md:min-h-[430px] reveal-up">
            <img
              src="/images/about/about-hero.png"
              alt="Global logistics movement through ports and distribution networks"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2216]/78 via-[#1A2216]/35 to-[#1A2216]/8" />
            <div className="relative z-10 p-7 md:p-12 lg:p-14 max-w-3xl text-[#E3E7E0] text-clarity-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/75 mb-4">About Us</p>
              <h1 className="font-serif-custom text-4xl md:text-6xl leading-tight tracking-tight">Make A Global Impact</h1>
              <p className="mt-5 text-base md:text-xl text-[#E3E7E0]/90">
                Your sustainable surplus solution for measurable growth, controlled risk, and long-term market performance.
              </p>
            </div>
          </section>

          <section id="global-impact" className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12">
            <div className="lg:col-span-7 reveal-up">
              <h2 className="font-serif-custom text-3xl md:text-5xl leading-tight tracking-tight">
                Sustainable decisions. Lower risk. Measurable outcomes.
              </h2>
              <p className="mt-6 text-lg text-[#2A3324]/80 leading-relaxed">
                Logis Dubai exists to solve the global surplus challenge with structure, accountability, and speed. We help retailers
                transform excess inventory into meaningful commercial value while reducing environmental burden across the supply chain.
              </p>
              <p className="mt-4 text-lg text-[#2A3324]/80 leading-relaxed">
                Our operating model combines logistics execution, local market expertise, and disciplined inventory management so your
                teams can make informed decisions and focus on core growth.
              </p>
            </div>
            <div className="lg:col-span-5 reveal-up">
              <div className="rounded-[2rem] bg-[#D5DBD1] p-7 md:p-8 h-full">
                <h3 className="font-serif-custom text-2xl md:text-3xl tracking-tight">Backed by 25 plus years of experience</h3>
                <p className="mt-5 text-[#2A3324]/80 leading-relaxed">
                  We believe the secondary market is the true circular economy. As a leading surplus-goods platform in the Middle East,
                  we support large eCommerce providers including Amazon, Costco, Target, Walmart, Best Buy, and others.
                </p>
                <p className="mt-4 text-[#2A3324]/80 leading-relaxed">
                  From port to port, our team receives full shipping containers, oversees movement, and manages sorting plus resale to
                  trusted local businesses across the Middle East and South Asia.
                </p>
              </div>
            </div>
          </section>

          <section className="reveal-up">
            <LayeredImageCard
              eyebrow="Operational Precision"
              title="The true circular economy in action"
              body="We extend product lifecycles by directing surplus inventory into high-demand markets through compliant, brand-safe distribution channels. This creates value recovery for retailers and broader product access for growth markets."
              secondaryBody="By integrating logistics, market intelligence, and local execution, we turn a complex international process into a repeatable growth engine."
              imageSrc="/images/about/container-operations.png"
              imageAlt="Container operations and inventory handling"
              ctaHref="/market-expansion"
              ctaLabel="Explore Market Expansion"
            />
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
