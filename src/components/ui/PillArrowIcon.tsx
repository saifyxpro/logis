import ArrowIcon from './ArrowIcon';

type PillArrowVariant = 'default' | 'light' | 'solid';

type PillArrowIconProps = {
  variant?: PillArrowVariant;
  className?: string;
};

const variantClassMap = {
  default: 'pill-link-icon-default',
  light: 'pill-link-icon-light',
  solid: 'pill-link-icon-solid',
} as const;

export default function PillArrowIcon({ variant = 'default', className = '' }: PillArrowIconProps) {
  return (
    <span
      aria-hidden
      className={`pill-link-icon ${variantClassMap[variant]} ${className}`.trim()}
    >
      <ArrowIcon direction="up-right" size={14} strokeWidth={1.9} />
    </span>
  );
}
