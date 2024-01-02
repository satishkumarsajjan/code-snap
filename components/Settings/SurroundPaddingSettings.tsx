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
  size: z.string(),
});

export function SurroundPaddingSettings() {
  const { surroundPadding, setSurroundPadding } = useStore();
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
              <FormLabel>Padding</FormLabel>
              <FormControl>
                <div className='flex gap-2'>
                  <Slider
                    defaultValue={[Number(surroundPadding)]}
                    value={[Number(surroundPadding)]}
                    max={100}
                    step={4}
                    onValueChange={(value) =>
                      setSurroundPadding(value[0].toString())
                    }
                    className='w-5/6 transition-transform'
                  />
                  <Label className='w-1/6 text-muted-foreground'>
                    {surroundPadding}
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
