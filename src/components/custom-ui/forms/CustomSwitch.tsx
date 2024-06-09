import type { Control, FieldValues, Path } from 'react-hook-form';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

// // switch
import { Switch } from '@/components/ui/switch';

export type CustomSwitchProps<T extends FieldValues> = {
  name: Path<T>; // keyof T;
  label: string;
  control: Control<T> | undefined;

  description?: string;
  showErrorMessage?: boolean;
};

export default function CustomSwitch<T extends FieldValues>({
  label,
  name,
  control,
  description,
  showErrorMessage = true,
}: CustomSwitchProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">{label}</FormLabel>

            {description && <FormDescription>{description}</FormDescription>}

            {showErrorMessage && <FormMessage className="pt-1" />}
          </div>

          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
}
