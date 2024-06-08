'use client';

import { type ColumnDef } from '@tanstack/react-table';

import { Payment } from '@/utils/data-table.utils';

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'clientName',
    // header: 'Client Name',
    header: () => <span>Client Name</span>,
  },
  {
    accessorKey: 'email',
    header: 'Email',
    cell: ({ row }) => {
      return (
        <div>
          <span>{row.original.email}</span>
        </div>
      );
    },
  },

  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
];
