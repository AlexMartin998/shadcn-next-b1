'use client';

import { type ColumnDef } from '@tanstack/react-table';

import { cn } from '@/lib/utils';
import { Payment } from '@/utils/data-table.utils';

// // DropdownMenu cell ----------------
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { toast } from '@/components/ui/use-toast';
import { MoreHorizontal } from 'lucide-react';

// // Status badge ----------------
type ColorBadgedType = 'pending' | 'processing' | 'success' | 'failed';
const calcStatusVariant = (status: ColorBadgedType) => {
  const variant: Record<ColorBadgedType, string> = {
    pending: 'bg-yellow-100 text-yellow-800',
    processing: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    failed: 'bg-red-100 text-red-800',
  };

  return variant[status] || '';
};

// // Sort Colum Data ----------------
import { SortColumData } from '@/components/custom-ui/data-table';

// // // Columns ========================================
export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'clientName',
    // header: 'Client Name',
    header: ({ column }) => {
      return <SortColumData label="Client Name" column={column} />;
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return <SortColumData label="Email" column={column} />;
    },
  },

  {
    accessorKey: 'amount',
    header: ({ column }) => (
      <div className="text-right">
        <SortColumData label="Amount" column={column} />
      </div>
    ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },

  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = row.original.status;
      const color = calcStatusVariant(status);

      return (
        <div
          className={cn(
            'px-2 py-1 rounded-full text-center w-[80%] mx-auto',
            color
          )}
        >
          <span className="capitalize">{status}</span>
        </div>
      );
    },
  },

  // Actions in columns ---------
  {
    id: 'actions',
    cell: ({ row }) => {
      const payment = row.original;

      return (
        // ============================== DropdownMenu ==============================
        <DropdownMenu>
          {/* ============ Trigger ============== */}
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          {/* ============ Content ============== */}
          <DropdownMenuContent align="end">
            {/* ------- Label ------- */}
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {/* ------- Items ------- */}
            <DropdownMenuItem
              onClick={() => {
                toast({
                  title: 'Payment printed',
                  description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4 overflow-x-auto">
                      <code className="text-white">
                        {JSON.stringify(row.original, null, 2)}
                      </code>
                    </pre>
                  ),
                });
              }}
            >
              Print payment
            </DropdownMenuItem>

            {/* ------- Separator ------- */}
            <DropdownMenuSeparator />

            {/* ------- Items ------- */}
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
