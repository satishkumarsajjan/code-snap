'use client';

import { useStore } from '@/hooks/store';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import styles from './styles.module.css';
import { find } from '@/lib/find';
import { SUPPORTED_THEMES } from '@/lib/SThemes';
import { ThemeDefinition } from '@/types/types';
interface SurroundProps {
  children: React.ReactNode;
}

export const Surround = ({ children }: SurroundProps) => {
  const { surroundTheme, surroundPadding } = useStore();

  const baseColors = surroundTheme.baseColors;
  const gradientColors = [...baseColors, baseColors[0]];
  console.log(surroundTheme);
  console.log(baseColors);
  console.log(gradientColors.join(', '));

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
