import { ArrowDown01Icon, ArrowRight01Icon, ArrowUpRight01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

type ArrowDirection = 'right' | 'up-right' | 'down';

type ArrowIconProps = {
  direction?: ArrowDirection;
  size?: number;
  strokeWidth?: number;
  className?: string;
};

const directionMap = {
  right: ArrowRight01Icon,
  'up-right': ArrowUpRight01Icon,
  down: ArrowDown01Icon,
} as const;

export default function ArrowIcon({
  direction = 'right',
  size = 16,
  strokeWidth = 1.8,
  className,
}: ArrowIconProps) {
  return (
    <HugeiconsIcon
      icon={directionMap[direction]}
      size={size}
      strokeWidth={strokeWidth}
      color="currentColor"
      className={className}
    />
  );
}
