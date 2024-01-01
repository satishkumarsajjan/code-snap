'use client';

import { useStore } from '@/hooks/store';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';

interface SurroundProps {
  children: React.ReactNode;
}

export const Surround = ({ children }: SurroundProps) => {
  const { surroundTheme, surroundPadding } = useStore();
  useEffect(() => {
    console.log(surroundPadding);
  }, [surroundPadding]);
  return (
    <div
      className={cn(surroundTheme, `rounded-lg  `)}
      style={{ padding: `${surroundPadding}px` }}
    >
      {children}
    </div>
  );
};
