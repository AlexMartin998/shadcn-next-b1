'use client';

import { useState } from 'react';

import { CustomComboboxNoForm } from '@/components/custom-ui';

export type PageProps = {};

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
    <div className="flex items-center gap-4">
      <CustomComboboxNoForm<FrameworkType>
        label="label"
        valueKey="value"
        options={frameworks}
        // isLoading={true}
        value={value}
        setValue={setValue}
        open={open}
        setOpen={setOpen}
        triggerTextBtn="Choose one..."
        inputPlaceholder="Search custom..."
        emptyText="No option found custom"
        onChangeRawValue={framework => {
          console.log(framework);
        }}
      />

      <div className="text-sm text-gray-500">
        <p>Value: {value}</p>
      </div>
    </div>
  );
};

export default Page;
