'use client';

import { useState } from 'react';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,

  // pagination -------
  getPaginationRowModel,

  // sort -------
  SortingState,
  getSortedRowModel,

  // filter -------
  ColumnFiltersState,
  getFilteredRowModel,
} from '@tanstack/react-table';

import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Input } from '@/components/ui/input'; // filter
import { ColorBadgedType } from './columns';
import { CustomSelectNoForm } from '@/components/custom-ui';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

type ColorBadgedTypeOptions = ColorBadgedType | 'all';
type StatusDataType = {
  label: string;
  value: string;
};
const statusData: StatusDataType[] = [
  { label: 'All', value: 'all' },
  { label: 'Pending', value: 'pending' },
  { label: 'Processing', value: 'processing' },
  { label: 'Success', value: 'success' },
  { label: 'Failed', value: 'failed' },
];

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  ///* local state -----------------
  // sort -------
  const [sorting, setSorting] = useState<SortingState>([]);

  // filter -------
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [currentStatus, setCurrentStatus] =
    useState<ColorBadgedTypeOptions>('all');

  // // Actual table Logic - Hook ===================================
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    // pagination: Client Side -------
    getPaginationRowModel: getPaginationRowModel(),

    // sort -------
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,

      // filter
      columnFilters,
    },

    // filter -------
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      {/* ======================= Global Filter ======================= */}
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Filter by email..."
          value={(table.getColumn('email')?.getFilterValue() as string) ?? ''}
          onChange={event =>
            table.getColumn('email')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />

        <CustomSelectNoForm<StatusDataType>
          label="label"
          valueKey="value"
          options={statusData}
          value={currentStatus}
          setValue={(value: string) =>
            setCurrentStatus(value as ColorBadgedType)
          }
          placeholder="Select status"
          selectGroupLabel="Status"
          onChangeValue={value => {
            value === 'all'
              ? table.getColumn('status')?.setFilterValue(undefined)
              : table.getColumn('status')?.setFilterValue(value);
          }}
          onChangeRawValue={rawValue => {
            console.log('rawValue', rawValue);
          }}
        />
      </div>

      {/* =============================== TABLE =============================== */}
      <div className="rounded-md border">
        <Table>
          {/* ---------------- T HEADER ---------------- */}
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              // --------- Row ---------
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          {/* ---------------- T BODY ---------------- */}
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                // --------- Row ---------
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {/* --------- Cell --------- */}
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              // =============================== NO RESULTS ===============================
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* =============================== PAGINATION =============================== */}
        <div className="flex items-center justify-end space-x-2 py-4 mx-2">
          {/* ---------------- ROWS COUNT ---------------- */}
          <div className="flex-1 text-sm text-muted-foreground">
            {table?.getRowCount() > 0 && (
              <span>
                Showing {table?.getPaginationRowModel().rows.length} of{' '}
                {table?.getRowCount()} rows
              </span>
            )}
          </div>

          {/* ---------------- PAGINATION BUTTONS ---------------- */}
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
