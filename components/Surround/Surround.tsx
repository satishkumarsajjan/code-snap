'use client';

import { useStore } from '@/hooks/store';
import { SUPPORTED_THEMES } from '@/lib/SThemes';
import { find } from '@/lib/find';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface SurroundProps {
  children: React.ReactNode;
}

export const Surround = ({ children }: SurroundProps) => {
  const { surroundTheme, surroundPadding } = useStore();

  const baseColors = find(SUPPORTED_THEMES, surroundTheme).baseColors;
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
