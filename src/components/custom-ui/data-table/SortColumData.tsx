import type { Column, SortDirection } from '@tanstack/react-table';
import { ArrowUpDown, ChevronDown, ChevronUp } from 'lucide-react';

import { Button } from '@/components/ui/button';

// generic is not required, but for doc :v
export interface SortColumDataProps<T> {
  column: Column<T, unknown>;
  label: string;
}

const SortedIcon = ({ isSorted }: { isSorted: false | SortDirection }) => {
  if (isSorted === 'asc') {
    return <ChevronUp className="ml-2 h-4 w-4" />;
  }

  if (isSorted === 'desc') {
    return <ChevronDown className="ml-2 h-4 w-4" />;
  }

  return <ArrowUpDown className="ml-2 h-4 w-4" />;
};

export default function SortColumData<T>({
  column,
  label,
}: SortColumDataProps<T>) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {label}
      <SortedIcon isSorted={column.getIsSorted()} />
    </Button>
  );
}

// // basic example ----------------
/* export default function SortColumData<T>({
  column,
  label,
}: SortColumDataProps<T>) {
  return (
    <Button
      variant="ghost"
      onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
    >
      {label}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  );
} */
