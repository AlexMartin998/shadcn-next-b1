import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export type CustomComboboxNoFormProps<T> = {
  options: T[];
  label: keyof T;
  valueKey: keyof T;
  triggerTextBtn?: string;
  inputPlaceholder?: string;
  emptyText?: string;
  value: string;
  setValue: (value: string) => void;
  isLoading?: boolean;

  open: boolean;
  setOpen: (value: boolean) => void;

  onChangeValue?: (value: any) => void;
  onChangeRawValue?: (value: T) => void;
};

function CustomComboboxNoForm<T>({
  options,
  label,
  valueKey,
  triggerTextBtn = 'Select an option',
  inputPlaceholder = 'Search...',
  emptyText = 'No option found.',
  isLoading = false,
  value,
  setValue,

  open,
  setOpen,

  onChangeValue,
  onChangeRawValue,
}: CustomComboboxNoFormProps<T>) {
  return (
    <>
      {/* ============================ POPOVER ============================ */}
      <Popover open={open} onOpenChange={setOpen}>
        {/* ============ popover trigger ============ */}
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value
              ? options
                  .find(option => option[valueKey] === value)
                  ?.[label]?.toString()
              : triggerTextBtn}

            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        {/* ============ popover content ============ */}
        <PopoverContent className="w-[200px] p-0">
          {/* ============================ COMMAND ============================ */}
          <Command>
            {/* ---------------- Command Input ---------------- */}
            {/* {!isLoading && <CommandInput placeholder={inputPlaceholder} />} */}
            <CommandInput placeholder={inputPlaceholder} disabled={isLoading} />

            {/* ---------------- Command List ---------------- */}
            <CommandList>
              {isLoading ? (
                <>
                  {/* -------- Command Empty -------- */}
                  <CommandEmpty>Loading...</CommandEmpty>
                </>
              ) : (
                <>
                  {/* -------- Command Empty -------- */}
                  <CommandEmpty>{emptyText}</CommandEmpty>

                  {/* ---------------- Command Group ---------------- */}
                  <CommandGroup>
                    {options.map(option => (
                      <CommandItem
                        key={option[valueKey] as string}
                        value={option[valueKey] as string}
                        onSelect={currentValue => {
                          setValue(currentValue === value ? '' : currentValue);
                          setOpen(false);

                          onChangeValue && onChangeValue(currentValue);
                          onChangeRawValue && onChangeRawValue(option);
                        }}
                      >
                        <Check
                          className={cn(
                            'mr-2 h-4 w-4',
                            value === option[valueKey]
                              ? 'opacity-100'
                              : 'opacity-0'
                          )}
                        />
                        {option[label] as string}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </>
              )}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default CustomComboboxNoForm;
