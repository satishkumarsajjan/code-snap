'use client';

import { useStore } from '@/hooks/store';
import { cn } from '@/lib/utils';

interface SurroundProps {
  children: React.ReactNode;
}

export const Surround = ({ children }: SurroundProps) => {
  const { surroundTheme, surroundPadding } = useStore();

  const baseColors = surroundTheme.baseColors;
  const gradientColors = [...baseColors, baseColors[0]];

  return (
    <div
      className={cn(`rounded-lg`)}
      style={{
        padding: `${surroundPadding}px`,
        backgroundImage: `linear-gradient(to right,${gradientColors.join(
          ', '
        )})`,
      }}
    >
      {children}
    </div>
  );
};
