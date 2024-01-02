'use client';
import { Switch } from '@/components/ui/switch';
import { useStore } from '@/hooks/store';
import { Label } from '../ui/label';

interface LineNumbersProps {}

export const LineNumbers = ({}: LineNumbersProps) => {
  const { isLineNumber, setIsLineNumber } = useStore();
  return (
    <div className='flex items-center justify-between'>
      <Label>Line numbers</Label>
      <Switch
        checked={isLineNumber}
        onCheckedChange={() => setIsLineNumber(!isLineNumber)}
      />
    </div>
  );
};
