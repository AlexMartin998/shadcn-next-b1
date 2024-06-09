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

import {
  CustomDatePicker,
  CustomInputComponent,
  CustomRadioGroupComponent,
  CustomSwitch,
} from '@/components/custom-ui/forms';

export type FormValuesType = z.infer<typeof formSchema>;
const formSchema = z.object({
  username: z.string().min(2).max(12),
  email: z.string().email(),

  gender: z.enum(['male', 'female'], { message: 'Required Custom!' }),

  dateOfBirth: z.date({
    required_error: 'Date of birth is required - Custom.',
  }),

  marketingEmails: z
    .boolean()
    .default(false)
    .refine(data => !!data, {
      message: 'You must agree to receive marketing emails - Custom.',
    }),
});
// el el ultimo en validarse, x eso req un click adicional
// .refine(data => !!data.marketingEmails, {
//   message: 'You must agree to receive marketing emails - Custom.',
//   path: ['marketingEmails'],
// });

type GenderType = {
  label: string;
  value: string;
};
const genderOptions: GenderType[] = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
];

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const form = useForm<FormValuesType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      // gender: 'male',
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
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-x-auto">
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
            name="email"
            placeholder="demo@demo.com"
            control={form.control}
            type="email"
          />

          {/* --------- gender --------- */}
          <CustomRadioGroupComponent<FormValuesType, GenderType>
            label="Gender"
            name="gender"
            control={form.control}
            // options
            labelKey="label"
            valueKey="value"
            options={genderOptions}
          />

          {/* <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Gender</FormLabel>

                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="male" />
                      </FormControl>
                      <FormLabel className="font-normal">Male</FormLabel>
                    </FormItem>

                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="female" />
                      </FormControl>
                      <FormLabel className="font-normal">Female</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* ================= date picker ================= */}
          <CustomDatePicker<FormValuesType>
            label="Date of birth"
            name="dateOfBirth"
            control={form.control}
            description="Your date of birth is used to calculate your age."
            placeholder="Pick a date Custom!"
          />

          {/* <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Date of birth</FormLabel>

                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground'
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormDescription>
                  Your date of birth is used to calculate your age.
                </FormDescription>

                <FormMessage />
              </FormItem>
            )}
          /> */}

          {/* ================= switch ================= */}
          <CustomSwitch<FormValuesType>
            label="Marketing emails"
            name="marketingEmails"
            control={form.control}
            description="Receive emails about new products, features, and more."
          />

          {/* <FormField
            control={form.control}
            name="marketingEmails"
            render={({ field }) => (
              <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                  <FormLabel className="text-base">Marketing emails</FormLabel>

                  <FormDescription>
                    Receive emails about new products, features, and more.
                  </FormDescription>

                  <FormMessage />
                </div>

                <FormControl>
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
              </FormItem>
            )}
          /> */}

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default Page;
