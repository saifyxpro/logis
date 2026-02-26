import Link from 'next/link';
import PillArrowIcon from './PillArrowIcon';

type LayeredImageCardProps = {
  title: string;
  body: string;
  secondaryBody?: string;
  imageSrc: string;
  imageAlt: string;
  eyebrow?: string;
  ctaHref?: string;
  ctaLabel?: string;
  className?: string;
};

export default function LayeredImageCard({
  title,
  body,
  secondaryBody,
  imageSrc,
  imageAlt,
  eyebrow,
  ctaHref,
  ctaLabel,
  className = '',
}: LayeredImageCardProps) {
  return (
    <article className={`relative self-start h-fit pt-3 ${className}`}>
      <div className="relative rounded-[2rem] border border-[#C4CFC0] bg-[#D5DBD1] px-5 pb-6 pt-[calc(56.25%+1.2rem)] md:px-8 md:pb-8 md:pt-[calc(56.25%+1.4rem)]">
        <div className="absolute inset-x-4 top-0 z-20 -translate-y-3 md:inset-x-6 md:-translate-y-4">
          <div className="relative aspect-[16/9] rounded-[1.45rem] overflow-hidden border border-[#C4CFC0] shadow-[0_8px_18px_rgba(42,51,36,0.12)]">
            <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2216]/40 via-[#1A2216]/8 to-transparent" />
          </div>
        </div>

        <div className="relative z-10">
          {eyebrow ? <p className="text-xs uppercase tracking-[0.18em] text-[#2A3324]/55 mb-3">{eyebrow}</p> : null}
          <h3 className="font-serif-custom text-2xl md:text-3xl tracking-tight leading-tight">
            <span className="reveal-text block">{title}</span>
          </h3>
          <p className="mt-4 text-[#2A3324]/80 leading-relaxed">{body}</p>
          {secondaryBody ? <p className="mt-3 text-[#2A3324]/80 leading-relaxed">{secondaryBody}</p> : null}
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="pill-link mt-6"
            >
              {ctaLabel}
              <PillArrowIcon />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
