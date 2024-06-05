'use client';

import { useState } from 'react';

import { Calendar } from '@/components/ui/calendar';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = useState<Date[] | undefined>([]);

  const selectedDate = date?.toLocaleDateString('es-ES', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex gap-2">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={date =>
          // Disable weekends and 15th of each month
          date.getDay() === 0 || date.getDay() === 6 || date.getDate() === 15
        }
      />

      {/* ======== Multiple Dates ======== */}
      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-md border"
      />

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold ">Info</h1>
        <div className="border-b"></div>

        <p>
          Selected Date: <span className="font-bold">{selectedDate}</span>
        </p>

        <p>
          Selected Dates:{' '}
          <span className="font-bold">
            {multipleDates
              ?.map(date => date.toLocaleDateString('es-ES'))
              .join(', ')}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Page;
