import type { HTMLInputTypeAttribute } from 'react';
import type { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export type CustomInputComponentProps<T extends FieldValues> = {
  name: Path<T>; // keyof T;
  label: string;
  placeholder?: string;
  control: Control<T> | undefined;

  type: HTMLInputTypeAttribute | undefined;

  description?: string;
};

export default function CustomInputComponent<T extends FieldValues>({
  label,
  name,
  control,
  placeholder,
  type = 'text',
  description,
}: CustomInputComponentProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <FormControl>
            <Input placeholder={placeholder} type={type} {...field} />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          {/* like helper text - form error message */}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
