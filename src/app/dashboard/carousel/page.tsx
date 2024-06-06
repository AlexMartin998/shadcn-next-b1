'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
// import Autoplay from 'embla-carousel-autoplay';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="w-full flex justify-center items-center ">
      <Carousel
        className="w-full max-w-xs"
        opts={{
          // dragFree: true, // Enable free dragging
          loop: true, // Enable loop mode
        }}
        // // // add plugins directly to the carousel
        // plugins={[
        //   Autoplay({
        //     delay: 2000,
        //     stopOnHover: true,
        //   }),
        // ]}
        // // // add plugins to actual component
        autoplay={2000}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              //
              // className="md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-4xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* ================= Carousel Controls ================= */}
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default Page;
