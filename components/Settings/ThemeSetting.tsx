'use client';

import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { ThemesArray, themes } from '@/lib/themes';
import { useStore } from '@/hooks/store';

const FormSchema = z.object({
  theme: z.string(),
});

export function ThemeSettings() {
  const { setTheme, theme } = useStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='theme'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Editor Theme</FormLabel>
              <Select
                onValueChange={(value) => {
                  setTheme(value);
                  field.onChange;
                }}
                value={theme}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an editor theme' />
                  </SelectTrigger>
                </FormControl>
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
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
