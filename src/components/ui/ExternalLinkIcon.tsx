import ArrowIcon from './ArrowIcon';

type ExternalLinkIconProps = {
  variant?: 'dark' | 'light';
  size?: number;
  className?: string;
};

const variantClassMap = {
  dark: 'bg-[#2A3324] text-[#E3E7E0] border border-[#2A3324]',
  light: 'bg-[#E3E7E0]/16 text-[#E3E7E0] border border-[#E3E7E0]/32',
} as const;

export default function ExternalLinkIcon({
  variant = 'dark',
  size = 12,
  className = '',
}: ExternalLinkIconProps) {
  return (
    <span
      aria-hidden
      className={`ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full transition-transform duration-200 group-hover:translate-x-[1px] group-hover:-translate-y-[1px] ${variantClassMap[variant]} ${className}`.trim()}
    >
      <ArrowIcon direction="up-right" size={size} strokeWidth={1.9} />
    </span>
  );
}
