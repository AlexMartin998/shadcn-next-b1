'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  // pagination -------
  getPaginationRowModel,
  useReactTable,
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

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  // // Actual table Logic - Hook ===================================
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),

    // pagination: Client Side -------
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="rounded-md border">
      {/* =============================== TABLE =============================== */}
      <Table>
        {/* ---------------- T HEADER ---------------- */}
        <TableHeader>
          {table.getHeaderGroups().map(headerGroup => (
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            // =============================== NO RESULTS ===============================
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
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
  );
}
