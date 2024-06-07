'use client';

import { toast } from 'sonner';

import { Button } from '@/components/ui/button';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-background gap-5">
      <Button
        variant="outline"
        onClick={() =>
          toast('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },

            duration: 1800,
            position: 'top-left',
          })
        }
      >
        Show Toast
      </Button>

      <Button
        variant="outline"
        onClick={() =>
          toast.success('Event has been created', {
            description: 'Sunday, December 03, 2023 at 9:00 AM',
            action: {
              label: 'Undo',
              onClick: () => console.log('Undo'),
            },

            duration: 1800,
            position: 'top-right',
            className: 'bg-green-500 text-white',
          })
        }
      >
        Show Toast Custom Colors
      </Button>
    </div>
  );
};

export default Page;
