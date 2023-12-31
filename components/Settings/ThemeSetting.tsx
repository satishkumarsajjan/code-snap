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
import { ThemesArray, themes } from '@/lib/themes';

export const ThemeSettings = () => {
  const { setTheme } = useStore();

  return (
    <Select onValueChange={(value) => setTheme(themes.get(value))}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a theme' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Themes</SelectLabel>
          {ThemesArray.map((theme, key) => (
            <SelectItem value={theme.value} key={key}>
              {theme.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
