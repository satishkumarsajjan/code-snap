'use client';
import { Slider } from '@/components/ui/slider';
import { useStore } from '@/hooks/store';

export const SurroundPadding = () => {
  const { surroundPadding, setSurroundPadding } = useStore();

  const handleValueChange = (size: string) => {
    console.log(size);
    setSurroundPadding(size);
  };
  return (
    <div>
      <Slider
        defaultValue={[Number(surroundPadding)]}
        max={100}
        step={4}
        onValueChange={(value) => handleValueChange(value[0].toString())}
      />
    </div>
  );
};
