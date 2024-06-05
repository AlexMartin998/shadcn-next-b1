import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export type PageProps = {};

const Page: React.FC<PageProps> = () => {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />

        {/* in case the image fails to load, it will fallback to the text "CN" */}
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p className="m-2">@shadcn</p>
    </div>
  );
};

export default Page;
