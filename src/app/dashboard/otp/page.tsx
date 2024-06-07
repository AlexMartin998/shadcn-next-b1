'use client';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { useState } from 'react';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [value, setValue] = useState('');

  return (
    <div className="space-y-2">
      <InputOTP maxLength={9} value={value} onChange={value => setValue(value)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>

        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>

        <InputOTPSeparator />

        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
          <InputOTPSlot index={8} />
        </InputOTPGroup>
      </InputOTP>

      <div className="text-center text-sm">
        {value === '' ? (
          <>Enter your one-time password.</>
        ) : (
          <>You entered: {value}</>
        )}
      </div>
    </div>
  );
};

export default Page;
