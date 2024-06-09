'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// form
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
import { toast } from '@/components/ui/use-toast';

import { CustomInputComponent } from '@/components/custom-ui/forms';

export type FormValuesType = z.infer<typeof formSchema>;
const formSchema = z.object({
  username: z.string().min(2).max(12),
  email: z.string().email(),
});

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const form = useForm<FormValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(data: FormValuesType) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log({ data });

    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div className="flex items-center justify-center w-1/2 mx-auto">
      {/* Shadcn form */}
      <Form {...form}>
        {/* ============ HTML form to be handled by useForm ============ */}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          {/* --------- username --------- */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>

                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>

                <FormDescription>
                  This is your public display name.
                </FormDescription>

                {/* like helper text - form error message */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* --------- email --------- */}
          <CustomInputComponent<FormValuesType>
            label="Email"
            name="username"
            placeholder="demo@demo.com"
            control={form.control}
            type="email"
          />

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
