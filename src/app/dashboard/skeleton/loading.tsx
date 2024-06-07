import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  const data = Array.from({ length: 9 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {data.map((_, index) => (
        <Card key={index}>
          <CardHeader className="flex-row">
            <Skeleton className="rounded-full mr-2 w-10 h-10" />

            <div className="flex-col flex-grow">
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-3 w-full" />
            </div>
          </CardHeader>

          <CardFooter>
            <Skeleton className="w-20 h-8" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
