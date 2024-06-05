import { Badge } from '@/components/ui/badge';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex gap-2">
      <Badge>Badge</Badge>

      <Badge variant="destructive">Destructive</Badge>

      <Badge variant="outline">Outline</Badge>

      <Badge variant="secondary">Secondary</Badge>

      <Badge variant="info" uppercase className="font-bold">
        Info
      </Badge>

      <Badge variant="success" uppercase className="font-bold text-black">
        Success
      </Badge>
    </div>
  );
};

export default Page;
