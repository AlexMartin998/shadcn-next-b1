'use client';

import { MultipleSelector } from '@/components/miltiple-selection';
import { MultipleCombobox } from '@/components/miltiple-selection/MultipleCombobox';
import { Option } from '@/components/miltiple-selection/MultipleSelector';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export type PageProps = {};

const OPTIONS: Option[] = [
  { label: 'Next.js', value: 'nextjs' },
  { label: 'React', value: 'react' },
  { label: 'Remix', value: 'remix' },
  { label: 'Vite', value: 'vite' },
  { label: 'Nuxt', value: 'nuxt' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
  { label: 'Angular', value: 'angular' },
  { label: 'Ember', value: 'ember', disable: true },
  { label: 'Gatsby', value: 'gatsby', disable: true },
  { label: 'Astro', value: 'astro' },
  { label: 'Sapper', value: 'sapper' },
  { label: 'Blitz', value: 'blitz' },
  { label: 'Solid', value: 'solid' },
  { label: 'Alpine', value: 'alpine' },
  { label: 'Marko', value: 'marko' },
  { label: 'JavaScript', value: 'javascript' },
  { label: 'TypeScript', value: 'typescript' },
  { label: 'Python', value: 'python' },
  { label: 'Java', value: 'java' },
  { label: 'C#', value: 'csharp' },
  { label: 'PHP', value: 'php' },
  { label: 'Ruby', value: 'ruby' },
  { label: 'Go', value: 'go' },
  { label: 'Rust', value: 'rust' },
  { label: 'Swift', value: 'swift' },
  { label: 'Kotlin', value: 'kotlin' },
  { label: 'PostgreSQL', value: 'postgresql' },
  { label: 'MySQL', value: 'mysql' },
  { label: 'MongoDB', value: 'mongodb' },
  { label: 'Firebase', value: 'firebase' },
  { label: 'SQLite', value: 'sqlite' },
  { label: 'Oracle', value: 'oracle' },
  { label: 'DynamoDB', value: 'dynamodb' },
  { label: 'Cassandra', value: 'cassandra' },
  { label: 'Redis', value: 'redis' },
  { label: 'AWS', value: 'aws' },
  { label: 'Google Cloud', value: 'google-cloud' },
  { label: 'Azure', value: 'azure' },
  { label: 'DigitalOcean', value: 'digitalocean' },
  { label: 'Heroku', value: 'heroku' },
  { label: 'Vercel', value: 'vercel' },
  { label: 'Netlify', value: 'netlify' },
];

const Page: React.FC<PageProps> = () => {
  const [defaultValues, setDefaultValues] = useState<Option[]>(
    OPTIONS.filter(option =>
      ['vercel', 'nextjs', 'react', 'azure'].includes(option.value)
    )
  );

  // directo como string[], las options se deberian mapear en base a lo q pida el backend, y como W el component, es decir: { label: name, value: id/code/uuid}
  const [selectedValues, setSelectedValues] = useState<string[]>(
    OPTIONS.filter(option =>
      ['vercel', 'nextjs', 'react', 'azure'].includes(option.value)
    ).map(option => option.value)
  );

  return (
    <div className="grid grid-cols-2 gap-7">
      {/* ======================= El mero mero ======================= */}
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Multiple Combobox Selector</h1>

        <MultipleCombobox
          options={OPTIONS}
          defaultValue={selectedValues}
          onValueChange={setSelectedValues}
          placeholder="Select frameworks"
          variant="inverted" // badged variant
          maxCount={3}
          // animation={2}
        />

        <div className="flex w-full items-center justify-center gap-5">
          <Button
            onClick={() => {
              console.log(selectedValues);
            }}
          >
            Print selected values
          </Button>

          <Button
            onClick={() => {
              setSelectedValues([]);
            }}
            variant="ghost"
          >
            Clear selected values
          </Button>
        </div>
      </div>

      {/* ----- FORM ----- */}
      {/* https://github.com/sersavan/shadcn-multi-select-component/blob/main/src/app/page.tsx */}

      {/* ======================= Falta funcionalidad de maxCount pero tiene onSearch ======================= */}
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl font-bold">Multiple Selector v1</h1>

        <MultipleSelector
          // default values ------
          value={defaultValues}
          onChange={setDefaultValues}
          // options ------
          defaultOptions={OPTIONS}
          placeholder="Select frameworks you like..."
          emptyIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
              no results found.
            </p>
          }
          // onSearch={} // nativo

          // is loading ------
          // isCustomLoading
          loadingIndicator={
            <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400 py-4">
              loading...
            </p>
          }
        />

        <div className="flex w-fullc items-center justify-center gap-5">
          <Button
            onClick={() => {
              console.log(defaultValues);
            }}
          >
            Print selected values
          </Button>

          <Button
            onClick={() => {
              setDefaultValues([]);
            }}
            variant="ghost"
          >
            Clear selected values
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Page;
