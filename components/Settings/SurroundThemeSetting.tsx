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
import { SurroundThemes, SurroundThemesArray } from '@/lib/surroundThemes';

SurroundThemes;
SurroundThemesArray;

export const SurroundThemeSettings = () => {
  const { setSurroundTheme } = useStore();

  return (
    <Select
      onValueChange={(value) => setSurroundTheme(SurroundThemes.get(value))}
    >
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a surround theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Surround Themes</SelectLabel>
          {SurroundThemesArray.map((theme, key) => (
            <SelectItem value={theme.value} key={key}>
              {theme.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
