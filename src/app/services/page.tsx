import Footer from '@/layouts/Footer';
import Header from '@/layouts/Header';
import { constructMetadata } from '@/libs/seo';
import LayeredImageCard from '@/components/ui/LayeredImageCard';
import PillArrowIcon from '@/components/ui/PillArrowIcon';
import OperatingModelAccordion from '@/components/sections/OperatingModelAccordion';
import Link from 'next/link';

const serviceCards = [
  {
    title: 'Surplus Asset Recovery',
    body:
      'We purchase and process returned, overstocked, and excess inventory through controlled workflows that maximize value and protect margin.',
    image: '/images/services/recovery-operations.jpeg',
    alt: 'Warehouse team evaluating and processing recovered surplus inventory',
  },
  {
    title: 'Export and Market Routing',
    body:
      'From container planning to destination allocation, we route products into the right markets across the Middle East and South Asia with lower risk.',
    image: '/images/services/export-routing.jpeg',
    alt: 'Container routing and cross-border export operations at a modern logistics port',
  },
  {
    title: 'Brand Protection and Compliance',
    body:
      'We apply strict de-branding, data handling, and legal compliance protocols to ensure your products move safely through approved channels.',
    image: '/images/services/compliance-protection.jpeg',
    alt: 'Compliance-focused logistics operations with secure product handling',
  },
];

const workflow = [
  {
    step: '01',
    title: 'Intake and Assessment',
    body: 'Inventory is received, categorized, and evaluated by condition, market potential, and compliance requirements.',
  },
  {
    step: '02',
    title: 'Recovery Strategy',
    body: 'We define channel path, pricing logic, and destination-market fit based on product type and demand signals.',
  },
  {
    step: '03',
    title: 'Execution and Distribution',
    body: 'Goods move through managed logistics and verified distribution partners to reach high-demand buyers efficiently.',
  },
  {
    step: '04',
    title: 'Reporting and Optimization',
    body: 'You receive structured performance visibility so each cycle improves operational return and sustainability outcomes.',
  },
];

export const metadata = constructMetadata({
  title: 'Services',
  description:
    'Explore Logis Dubai services for surplus recovery, compliant export operations, and circular-market distribution across high-growth regions.',
});

export default function ServicesPage() {
  return (
    <div className="bg-[#E3E7E0] text-[#2A3324] font-sans-custom min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />

        <main className="py-10 md:py-16 space-y-14 md:space-y-20">
          <section className="relative rounded-[2.5rem] overflow-hidden min-h-[290px] md:min-h-[430px] reveal-up">
            <img
              src="/images/services/services-hero.jpeg"
              alt="Large-scale reverse logistics service operations with organized inventory movement"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2216]/78 via-[#1A2216]/36 to-[#1A2216]/8" />
            <div className="relative z-10 p-7 md:p-12 lg:p-14 max-w-3xl text-[#E3E7E0] text-clarity-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/75 mb-4">Services</p>
              <h1 className="font-serif-custom text-4xl md:text-6xl leading-tight tracking-tight">
                <span className="reveal-text block">Reverse logistics services</span>
                <span className="reveal-text block">built for scale and control</span>
              </h1>
              <p className="mt-5 text-base md:text-xl text-[#E3E7E0]/90">
                We help retailers convert surplus complexity into structured recovery, compliant execution, and sustainable market value.
              </p>
            </div>
          </section>

          <section className="space-y-8 reveal-up">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/60 mb-3">Core Services</p>
              <h2 className="font-serif-custom text-3xl md:text-5xl tracking-tight leading-tight">
                <span className="reveal-text block">What we manage end to end</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start">
              {serviceCards.map((card) => (
                <LayeredImageCard
                  key={card.title}
                  className="reveal-up"
                  eyebrow="Service"
                  title={card.title}
                  body={card.body}
                  imageSrc={card.image}
                  imageAlt={card.alt}
                />
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            <div className="lg:col-span-7 h-fit bg-[#D5DBD1] rounded-[2rem] p-5 md:p-6 reveal-up">
              <h2 className="font-serif-custom text-3xl md:text-4xl tracking-tight leading-tight">
                <span className="reveal-text block">Our operating model</span>
              </h2>

              <OperatingModelAccordion items={workflow} />
            </div>

            <LayeredImageCard
              className="lg:col-span-5 reveal-up"
              eyebrow="Execution"
              title="Disciplined process from intake to resale"
              body="Every stage is managed through validated operational controls so your inventory moves with speed, traceability, and consistent quality outcomes."
              imageSrc="/images/services/operating-model.jpeg"
              imageAlt="Data-driven logistics planning and execution flow in a modern operations environment"
            />
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 reveal-up">
            <div className="bg-[#D5DBD1] rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/55 mb-3">Operational Benefit</p>
              <h3 className="font-serif-custom text-2xl tracking-tight">Reduced friction</h3>
              <p className="mt-3 text-[#2A3324]/80 leading-relaxed">
                Simplify cross-border complexity with one execution partner aligned to your standards.
              </p>
            </div>

            <div className="bg-[#D5DBD1] rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/55 mb-3">Commercial Benefit</p>
              <h3 className="font-serif-custom text-2xl tracking-tight">Higher value recovery</h3>
              <p className="mt-3 text-[#2A3324]/80 leading-relaxed">
                Unlock structured resale paths that protect margin and improve inventory turn.
              </p>
            </div>

            <div className="bg-[#2A3324] text-[#E3E7E0] rounded-[2rem] p-6 md:p-8">
              <p className="text-xs uppercase tracking-[0.18em] text-[#E3E7E0]/65 mb-3">Next Step</p>
              <h3 className="font-serif-custom text-2xl tracking-tight">Design your service plan</h3>
              <p className="mt-3 text-[#E3E7E0]/85 leading-relaxed">
                Tell us your surplus profile and we will map the right service architecture for your team.
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
