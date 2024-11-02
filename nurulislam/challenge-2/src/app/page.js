"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ArrowUpDown,
  ChevronDown,
  MoreHorizontal,
  ChevronsUpDown,
  ArrowDown,
  ArrowUp,
  EyeOff,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Settings2,
  CircleX,
  CircleCheck,
  Timer,
  MoveUp,
  MoveDown,
  MoveRight,
  Download,
  ArrowRight,
  Square,
  Blocks,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { columns } from "@/components/table/Columns";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  data,
  priorityData,
  statusData,
} from "@/components/table/TableDataCollection";
import { SearchAbleDropDown } from "@/components/table/SearchAbleDropDown";
import { DatePickerWithRange } from "@/components/table/DatePicker";
import ToggleColumns from "@/components/table/ToggleColumns";
import { NewTask } from "@/components/table/NewTsak";
import { PaginationTable } from "@/components/table/PaginationTable";
import { AdvancedFilterDropDown } from "../components/table/AdvancedFilterDropDown";

export default function Home() {
  const [advancedFilter, setAdvancedFilter] = React.useState(false);
  const [sorting, setSorting] = React.useState();
  const [columnFilters, setColumnFilters] = React.useState();
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const [statusValues, setStatusValue] = React.useState([]);
  const [priorityValues, setPriorityValue] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  const [position, setPosition] = React.useState("bottom");

  // filtered
  const filteredWithStatus = () => {
    // table.getColumn("status")?.setFilterValue("done");
    // table.getColumn("status")?.setFilterValue("canceled");
    // table.getColumn("id");\
    // table.setColumnFilters(statusValues);

    table.setColumnFilters([
      {
        id: "status",
        value: statusValues,
      },
      {
        id: "priority",
        value: priorityValues,
      },
    ]);
  };
  React.useEffect(() => {
    if (statusValues.length > 0 || priorityValues.length > 0) {
      table.resetColumnFilters();
      filteredWithStatus();
    } else {
      table.resetColumnFilters();
    }
    // table.resetColumnFilters();

    // console.log(
    //   "zzzzz",

    //   columnFilters
    // );
  }, [statusValues, priorityValues]);

  return (
    <main className="bg-blend-darken">
      <div className="container">
        <div className="w-full pt-4">
          {/* top buttons */}
          <div className="flex ">
            <div>
              <Button
                variant="outline"
                onClick={() => setAdvancedFilter(!advancedFilter)}
                className={`mr-2 ${advancedFilter && "bg-slate-100"}`}
              >
                <Blocks /> Advanced filter
              </Button>
            </div>
            <Button variant="outline">
              {" "}
              <Square /> Floating bar
            </Button>
          </div>

          {/* calender */}
          <div className="flex justify-end my-4">
            <DatePickerWithRange />
          </div>

          {/* action buttons */}
          <div className="flex items-center py-4 overflow-auto mb-4">
            <div className="flex justify-between w-[100%]">
              <div className="flex items-center">
                <Input
                  placeholder="Filter titles..."
                  value={table.getColumn("title")?.getFilterValue() ?? ""}
                  onChange={(event) =>
                    table.getColumn("title")?.setFilterValue(event.target.value)
                  }
                  className="max-w-sm min-w-[160px] ml-1 mr-2"
                />
                {/* dropdown */}

                <SearchAbleDropDown
                  SearchData={statusData}
                  title="Status"
                  value2={statusValues}
                  setValue2={setStatusValue}
                />

                {/* priority */}

                <SearchAbleDropDown
                  SearchData={priorityData}
                  title="Priority"
                  value2={priorityValues}
                  setValue2={setPriorityValue}
                />

                {(statusValues.length > 0 || priorityValues.length > 0) && (
                  <Button
                    variant="ghost"
                    className="mr-2"
                    onClick={() => {
                      setPriorityValue([]);
                      setStatusValue([]);
                    }}
                  >
                    Reset X
                  </Button>
                )}
              </div>
            </div>

            {/* toggle table */}

            <div className="flex">
              <NewTask />
              <Button variant="outline" className="ml-auto mr-2" type="file">
                <Download className="mr-2 h-4 w-4" /> Export
              </Button>
              {advancedFilter && <AdvancedFilterDropDown />}
              <ToggleColumns table={table} />
            </div>
          </div>

          {/* advanced */}

          {/* table start here */}

          <div className="rounded-md border overflow-auto">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
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
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
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
          </div>
          {/* <div className="flex items-center justify-end space-x-2 py-4">
            <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
            </div>
            <div className="space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ChevronLeft />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                <ChevronRight />
              </Button>
            </div>
          </div> */}
          {/* pagination */}
          <PaginationTable table={table} />
        </div>
      </div>

      {/* popover */}
      {/* <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Place content for the popover here.</PopoverContent>
      </Popover> */}
    </main>
  );
}
