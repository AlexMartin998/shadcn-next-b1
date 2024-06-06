'use client';

export type PageProps = {};

import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
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
import { useState } from 'react';

type FrameworkType = {
  value: string;
  label: string;
};
const frameworks: FrameworkType[] = [
  {
    value: 'next.js',
    label: 'Next.js',
  },
  {
    value: 'sveltekit',
    label: 'SvelteKit',
  },
  {
    value: 'nuxt.js',
    label: 'Nuxt.js',
  },
  {
    value: 'remix',
    label: 'Remix',
  },
  {
    value: 'astro',
    label: 'Astro',
  },
];

const Page: React.FC<PageProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

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
              ? frameworks.find(framework => framework.value === value)?.label
              : 'Select framework...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>

        {/* ============ popover content ============ */}
        <PopoverContent className="w-[200px] p-0">
          {/* ============================ COMMAND ============================ */}
          <Command>
            {/* ---------------- Command Input ---------------- */}
            <CommandInput placeholder="Search framework..." />

            {/* ---------------- Command List ---------------- */}
            <CommandList>
              {/* -------- Command Empty -------- */}
              <CommandEmpty>No framework found.</CommandEmpty>

              {/* ---------------- Command Group ---------------- */}
              <CommandGroup>
                {frameworks.map(framework => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={currentValue => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === framework.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Page;
