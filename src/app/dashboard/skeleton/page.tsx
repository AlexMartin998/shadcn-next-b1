import Image from 'next/image';

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export type PageProps = {};

const getData = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return '123456789'.split(''); // 9 items
};

const Page = async () => {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map(item => (
        <Card key={item}>
          <CardHeader className="flex-row">
            <Image
              src="https://github.com/shadcn.png"
              alt="Shadcn UI"
              width={300}
              height={300}
              className="rounded-full mr-2 w-10 h-10"
            />

            <div>
              <CardTitle>Shadcn UI</CardTitle>
              <CardDescription>UI components for React</CardDescription>
            </div>
          </CardHeader>

          <CardFooter>
            <Button>Show more</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Page;
