'use client';

import { useState } from 'react';

import { CustomAlertDialog } from '@/components/custom-ui';
import { Button } from '@/components/ui/button';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <CustomAlertDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        buttonText="Show Dialog"
        alertTitle="Are you absolutely sure?"
        alertDescription="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
        onCancel={() => console.log('Cancel')}
        onContinue={() => console.log('Continue')}
      />

      <Button onClick={() => setIsOpen(true)}>Show Dialog Manually</Button>
    </div>
  );
};

export default Page;
