import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { constructMetadata } from '@/libs/seo';
import LayeredImageCard from '@/components/ui/LayeredImageCard';
import PillArrowIcon from '@/components/ui/PillArrowIcon';
import Link from 'next/link';

const challengeCards = [
  {
    title: 'Unclear logistical business planning',
    body:
      'Strong planning is essential for smooth cross-border movement. You need a logistics partner who understands local regulations and can reduce loss, delays, and operational risk.',
  },
  {
    title: 'Inexperience with border control and distribution laws',
    body:
      'Customs clearance, unexpected tariffs, and compliance checks can disrupt execution before goods even enter the market. We build readiness into every shipment.',
  },
  {
    title: 'Complex legal requirements in each market',
    body:
      'Legal protocols differ by country and by category. We coordinate local legal and brand-protection frameworks so your products move with clarity and control.',
  },
  {
    title: 'Uncertain product market fit',
    body:
      'Our market and distribution teams help you evaluate pricing, packaging, and channel strategy so products reach the right buyers with less risk.',
  },
];

export const metadata = constructMetadata({
  title: 'Market Expansion',
  description:
    'Expand into the UAE and Pakistan with lower risk through Logis Dubai export expertise, compliance execution, and local distribution partnerships.',
});

export default function MarketExpansionPage() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="py-10 md:py-16 space-y-14 md:space-y-20">
          <section className="relative rounded-[2.5rem] overflow-hidden min-h-[290px] md:min-h-[430px] reveal-up">
            <img
              src="/images/markets/market-expansion-hero.png"
              alt="International cargo port connecting global markets"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2216]/78 via-[#1A2216]/38 to-[#1A2216]/10" />
            <div className="relative z-10 p-7 md:p-12 lg:p-14 max-w-3xl text-[#E3E7E0] text-clarity-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/75 mb-4">Market Expansion</p>
              <h1 className="font-serif-custom text-4xl md:text-6xl leading-tight tracking-tight">
                Your access to new markets without the risk
              </h1>
              <p className="mt-5 text-base md:text-xl text-[#E3E7E0]/90">
                Let our experts manage export complexity while your team stays focused on product and growth.
              </p>
            </div>
          </section>

          <section className="reveal-up">
            <h2 className="font-serif-custom text-3xl md:text-5xl tracking-tight leading-tight max-w-4xl">
              Why US retailers need a specialist partner for international surplus channels
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              {challengeCards.map((item) => (
                <article key={item.title} className="bg-[#D5DBD1] rounded-[2rem] p-6 md:p-8">
                  <h3 className="font-serif-custom text-2xl tracking-tight leading-tight">{item.title}</h3>
                  <p className="mt-4 text-[#2A3324]/80 leading-relaxed">{item.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-8">
            <div className="reveal-up">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/60 mb-3">Regional Focus</p>
              <h2 className="font-serif-custom text-3xl md:text-5xl tracking-tight">Your gateway to the UAE and Pakistan</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
              <LayeredImageCard
                className="reveal-up"
                eyebrow="Regional Gateway"
                title="The UAE"
                body="The UAE has remained a leading US export destination in the Middle East and Africa. It is a strategic operating hub for American companies serving the Middle East, Africa, Europe, and Asia."
                secondaryBody="Its business openness, evolving knowledge economy, and geographic position make it a high-value entry point for international expansion."
                imageSrc="/images/markets/uae-gateway.png"
                imageAlt="UAE market gateway logistics hub"
              />

              <LayeredImageCard
                className="reveal-up"
                eyebrow="Regional Gateway"
                title="Pakistan"
                body="The US and Pakistan maintain a significant trade relationship, with bilateral activity historically reaching roughly USD 6.81 billion and strong demand across consumer goods, agriculture, ICT, healthcare, and energy."
                secondaryBody="It is a high-opportunity market that requires adaptability, local expertise, and consistent execution through trusted in-country distribution partners."
                imageSrc="/images/markets/pakistan-market.png"
                imageAlt="Pakistan retail and distribution market"
              />
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 reveal-up">
            <div className="lg:col-span-8 bg-[#D5DBD1] rounded-[2rem] p-6 md:p-8">
              <h3 className="font-serif-custom text-2xl md:text-4xl tracking-tight leading-tight">Experience matters. The right partner matters.</h3>
              <p className="mt-4 text-[#2A3324]/80 leading-relaxed">
                Logis Dubai is US-based with offices in Houston and decades of experience in real estate, retail, and international
                trade. We help retailers avoid over-promised execution, brand exposure, and hidden financial risks.
              </p>
              <p className="mt-3 text-[#2A3324]/80 leading-relaxed">
                We manage regulatory complexity, taxation friction, and local coordination so your teams can stay focused on building
                products and growing market share.
              </p>
            </div>
            <div className="lg:col-span-4 bg-[#2A3324] text-[#E3E7E0] rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/65 mb-3">Next Step</p>
              <h4 className="font-serif-custom text-2xl tracking-tight">Plan your market entry with our team</h4>
              <p className="mt-4 text-[#E3E7E0]/82 leading-relaxed">
                We will map your product category, compliance path, shipping model, and local distribution strategy.
              </p>
              <Link
                href="/contact-us"
                className="pill-link-light mt-6"
              >
                Contact Our Team
                <PillArrowIcon variant="light" />
              </Link>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
