'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

import { useStore } from '@/hooks/store';
import { SUPPORTED_THEMES } from '@/lib/SThemes';

const FormSchema = z.object({
  theme: z.string(),
});

export function SurroundThemeSettings() {
  const { setSurroundTheme, surroundTheme } = useStore();
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
              <FormLabel>Surround Theme</FormLabel>
              <Select
                onValueChange={(value) => {
                  setSurroundTheme(value);
                  field.onChange;
                }}
                value={surroundTheme}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder='Select an editor language' />
                  </SelectTrigger>
                </FormControl>
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
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
