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
import { LanguagesArray, languages } from '@/lib/languages';
import { ThemesArray, themes } from '@/lib/themes';

export const LanguageSettings = () => {
  const { setLanguage } = useStore();

  return (
    <Select onValueChange={(value) => setLanguage(languages.get(value))}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a language' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {LanguagesArray.map((lang, key) => (
            <SelectItem value={lang.value} key={key}>
              {lang.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
