'use client';
import { Switch } from '@/components/ui/switch';
import { useStore } from '@/hooks/store';

interface LineNumbersProps {}

export const LineNumbers = ({}: LineNumbersProps) => {
  const { isLineNumber, setIsLineNumber } = useStore();
  return (
    <Switch
      checked={isLineNumber}
      onCheckedChange={() => setIsLineNumber(!isLineNumber)}
    />
  );
};
