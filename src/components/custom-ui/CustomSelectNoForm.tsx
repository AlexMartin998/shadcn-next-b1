import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '../ui/label';

export type CustomSelectNoFormProps<T> = {
  options: T[];
  label: keyof T;
  valueKey: keyof T;
  value: string;
  setValue: (value: string) => void;

  placeholder: string;
  selectGroupLabel: string;

  // optional
  onChangeValue?: (value: string) => void;
  onChangeRawValue?: (value: T) => void;
};

export default function CustomSelectNoForm<T>({
  options,
  label,
  valueKey,
  value,
  setValue,

  placeholder,
  selectGroupLabel,

  onChangeValue,
  onChangeRawValue,
}: CustomSelectNoFormProps<T>) {
  return (
    <div className="grid items-center gap-1.5">
      <Label>{selectGroupLabel}</Label>

      <Select
        value={value}
        onValueChange={value => {
          setValue(value);

          onChangeValue && onChangeValue(value);
        }}
      >
        {/* ============= Trigger ============= */}
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>

        {/* ============= Content ============= */}
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectGroupLabel}</SelectLabel>
            {options.map(option => (
              <SelectItem
                key={option[valueKey] as string}
                value={option[valueKey] as string}
                onClick={() => {
                  onChangeValue && onChangeValue(option[valueKey] as string);
                  onChangeRawValue && onChangeRawValue(option);
                }}
              >
                {option[label] as string}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
