'use client';

import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [terms, setTerms] = useState<boolean>(false);

  return (
    <>
      <div className="items-top flex space-x-2">
        <Checkbox
          id="terms1"
          checked={terms}
          onCheckedChange={value => {
            setTerms(!!value);

            // Do something with the value
            console.log(value);
          }}
        />

        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>

        {terms ? (
          <Badge variant="success">Accepted</Badge>
        ) : (
          <Badge variant="destructive">Not accepted</Badge>
        )}
      </div>
    </>
  );
};

export default Page;
