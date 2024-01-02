'use client';
import { Slider } from '@/components/ui/slider';
import { useStore } from '@/hooks/store';

export const EditorWidthSettings = () => {
  const { editorWidth, setEditorWidth } = useStore();

  const handleValueChange = (size: string) => {
    setEditorWidth(size);
  };
  return (
    <div>
      <Slider
        defaultValue={[Number(editorWidth)]}
        min={200}
        max={1000}
        step={10}
        onValueChange={(value) => handleValueChange(value[0].toString())}
      />
    </div>
  );
};
