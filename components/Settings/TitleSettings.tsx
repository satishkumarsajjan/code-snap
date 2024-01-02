'use client';

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
import { Input } from '@/components/ui/input';
import { useStore } from '@/hooks/store';
interface TitleSettingsProps {}
const FormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
});

export const TitleSettings = ({}: TitleSettingsProps) => {
  const { setTitle } = useStore();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: '',
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setTitle(data.title);
  }
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='w-full space-y-6'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Snap Title</FormLabel>
                <FormControl>
                  <div className='flex items-center w-full max-w-full space-x-2'>
                    <Input placeholder='Enter a title...' {...field} />
                    <Button type='submit'>Submit</Button>
                  </div>
                </FormControl>
                <FormDescription>
                  Add title along with extension.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </div>
  );
};
