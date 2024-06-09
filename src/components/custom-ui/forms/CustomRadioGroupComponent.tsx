import type { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export type CustomRadioGroupComponentProps<T extends FieldValues, U> = {
  name: Path<T>; // keyof T;
  label: string;
  control: Control<T> | undefined;

  options: U[];
  labelKey: keyof U;
  valueKey: keyof U;
};

export default function CustomRadioGroupComponent<T extends FieldValues, U>({
  label,
  name,
  control,
  labelKey,
  valueKey,
  options,
}: CustomRadioGroupComponentProps<T, U>) {
  return (
    <FormItem>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>{label}</FormLabel>

            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col space-y-1"
              >
                {options.map(option => (
                  <FormItem
                    key={option[valueKey] as string}
                    className="flex items-center space-x-3 space-y-0"
                  >
                    <FormControl>
                      <RadioGroupItem value={option[valueKey] as string} />
                    </FormControl>

                    <FormLabel className="font-normal">
                      {option[labelKey] as string}
                    </FormLabel>
                  </FormItem>
                ))}
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </FormItem>
  );
}
