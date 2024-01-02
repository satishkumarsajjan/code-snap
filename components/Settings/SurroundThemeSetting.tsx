'use client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useStore } from '@/hooks/store';
import { SUPPORTED_THEMES } from '@/lib/SThemes';

export const SurroundThemeSettings = () => {
  const { setSurroundTheme } = useStore();

  return (
    <Select
      onValueChange={(value) => {
        setSurroundTheme(value);
      }}
    >
      <SelectTrigger className='w-[full]'>
        <SelectValue placeholder='Select a surround theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Surround Themes</SelectLabel>
          {SUPPORTED_THEMES.map((theme, key) => (
            <SelectItem value={theme.id} key={key}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
