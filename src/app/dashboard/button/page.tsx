'use client';

import { Button } from '@/components/ui/button';
import { Loader2, Mail } from 'lucide-react';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Button>Default</Button>

      <Button variant="destructive">Destructive</Button>

      <Button variant="ghost">Ghost</Button>

      <Button variant="link">Link</Button>

      <Button variant="outline">Outline</Button>

      <Button variant="secondary">Secondary</Button>

      <Button
        disabled
        onClick={() => {
          console.log('Disabled button clicked');
        }}
      >
        Disabled
      </Button>

      <Button variant="success" capitalize={false}>
        success
      </Button>

      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>

      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
    </div>
  );
};

export default Page;
