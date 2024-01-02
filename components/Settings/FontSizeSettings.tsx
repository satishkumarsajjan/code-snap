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

import { Slider } from '@/components/ui/slider';
import { useStore } from '@/hooks/store';
import { Label } from '../ui/label';

const FormSchema = z.object({
  size: z.string().min(1),
});

export function FontSizeSettings() {
  const { fontSize, setFontSize } = useStore();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  return (
    <Form {...form}>
      <form className='w-full space-y-6'>
        <FormField
          control={form.control}
          name='size'
          render={() => (
            <FormItem>
              <FormLabel>Font size</FormLabel>
              <FormControl>
                <div className='flex gap-2'>
                  <Slider
                    defaultValue={[Number(fontSize)]}
                    value={[Number(fontSize)]}
                    max={30}
                    step={1}
                    onValueChange={(value) => setFontSize(value[0].toString())}
                    className='w-5/6 transition-transform'
                  />
                  <Label className='w-1/6 text-muted-foreground'>
                    {fontSize}
                  </Label>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
