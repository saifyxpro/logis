'use client';

import { useState } from 'react';
import ArrowIcon from '@/components/ui/ArrowIcon';

type WorkflowItem = {
  step: string;
  title: string;
  body: string;
};

type OperatingModelAccordionProps = {
  items: WorkflowItem[];
};

export default function OperatingModelAccordion({ items }: OperatingModelAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-5 divide-y divide-[#2A3324]/14">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `workflow-panel-${index}`;
        const buttonId = `workflow-trigger-${index}`;

        return (
          <section key={item.step} className="py-1">
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full rounded-xl px-1 py-2.5 md:py-3 text-left transition-colors hover:bg-[#2A3324]/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2A3324]/30"
              onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
            >
              <span className="inline-flex items-center gap-2.5 md:gap-3.5">
                <span className="text-[#2A3324]/65">
                  <ArrowIcon
                    direction="right"
                    size={17}
                    className={`transition-transform duration-250 ${isOpen ? 'rotate-90' : ''}`}
                  />
                </span>
                <span className="font-serif-custom text-xl md:text-[1.7rem] tracking-tight leading-[1.12] text-[#2A3324]">{item.title}</span>
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="pl-[1.75rem] pr-8 pb-2.5 text-[#2A3324]/80 leading-relaxed">{item.body}</p>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
