import React from 'react';

interface SectionFrameProps {
  children: React.ReactNode;
  className?: string;
  guides?: Array<number | string>;
  showFrom?: 'md' | 'lg';
  rounded?: boolean;
  lineInsetClass?: string;
}

export default function SectionFrame({
  children,
  className = '',
  guides = [0, 25, 50, 75, 100],
  showFrom = 'md',
  rounded = false,
  lineInsetClass = 'inset-y-0',
}: SectionFrameProps) {
  const visibilityClass = showFrom === 'lg' ? 'hidden lg:block' : 'hidden md:block';
  const guideContainerClass = rounded
    ? 'relative h-full w-full overflow-hidden rounded-[2.5rem]'
    : 'relative h-full w-full overflow-hidden';

  return (
    <div className={`relative ${className}`}>
      <div aria-hidden className={`pointer-events-none absolute inset-0 z-0 ${visibilityClass}`}>
        <div className={guideContainerClass}>
          {guides.map((guide, index) => {
            const isEdge = index === 0 || index === guides.length - 1;
            const left = typeof guide === 'number' ? `${guide}%` : guide;
            const style = isEdge ? { left } : { left: `calc(${left} - 0.5px)` };

            return (
              <span
                key={`${left}-${index}`}
                className={`absolute ${lineInsetClass} w-px rounded-full bg-[#C4CFC0]/55`}
                style={style}
              />
            );
          })}
        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  );
}
