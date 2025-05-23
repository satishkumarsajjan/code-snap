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

export function EditorWidthSettings() {
  const { editorWidth, setEditorWidth } = useStore();
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
              <FormLabel>Editor width</FormLabel>
              <FormControl>
                <div className='flex gap-2'>
                  <Slider
                    defaultValue={[Number(editorWidth)]}
                    value={[Number(editorWidth)]}
                    min={200}
                    max={1000}
                    step={10}
                    onValueChange={(value) =>
                      setEditorWidth(value[0].toString())
                    }
                    className='w-5/6 transition-transform'
                  />

                  <Label className='w-1/6 text-muted-foreground'>
                    {editorWidth}
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
