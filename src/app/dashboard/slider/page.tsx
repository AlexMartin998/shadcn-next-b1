'use client';

import { Slider } from '@/components/ui/slider';
import { useState } from 'react';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  const [sliderValue, setSliderValue] = useState(10);
  const [rangeValue, setRangeValue] = useState([10, 20]);

  return (
    <div className="grid grid-cols-1 gap-3">
      <span>
        Slider value: <span className="font-bold">{sliderValue}</span>
      </span>

      <Slider
        defaultValue={[sliderValue]}
        onValueChange={value => {
          console.log('slider1', value);
          setSliderValue(value[0]);
        }}
        max={100}
        step={1}
      />

      <span>
        Range value: <span className="font-bold">{rangeValue.join(' - ')}</span>
      </span>
      <Slider
        defaultValue={rangeValue}
        onValueChange={value => {
          console.log('slider2', value);
          setRangeValue(value);
        }}
        max={100}
        step={1}
      />
    </div>
  );
};

export default Page;
