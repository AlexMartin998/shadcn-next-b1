'use client';

import { useEffect, useState } from 'react';

import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const next = prev + 1;

        if (next >= 100) {
          clearInterval(interval);
        }

        return next;
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Progress
      value={progress}
      indicatorColor={cn({
        'bg-red-500': progress < 50,
        'bg-yellow-500': progress >= 50 && progress < 80,
        'bg-green-500': progress <= 99,
        'bg-blue-500': progress === 100,
      })}
    />
  );
};

export default Page;
