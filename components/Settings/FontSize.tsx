'use client';
import { Slider } from '@/components/ui/slider';
import { useStore } from '@/hooks/store';

interface FontSizeProps {}

export const FontSize = ({}: FontSizeProps) => {
  const { fontSize, setFontSize } = useStore();

  const handleValueChange = (size: string) => {
    setFontSize(size);
  };
  return (
    <div>
      <Slider
        defaultValue={[Number(fontSize)]}
        max={30}
        step={1}
        onValueChange={(value) => handleValueChange(value[0].toString())}
      />
    </div>
  );
};
