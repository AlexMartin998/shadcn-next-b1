import { columns } from './columns';
import { DataTable } from './data-table';

import { payments } from '@/utils/data-table.utils';

async function fetchData() {
  return payments;
}

export type PageProps = {};

const Page: React.FC<PageProps> = async () => {
  const data = await fetchData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default Page;
