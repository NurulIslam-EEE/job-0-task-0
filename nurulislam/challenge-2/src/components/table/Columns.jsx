"use client";
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  ChevronRight,
  ChevronsUpDown,
  CircleCheck,
  CircleX,
  EyeOff,
  MoreHorizontal,
  Timer,
} from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { filterFns } from "@tanstack/react-table";
import { useState } from "react";

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),

    enableHiding: false,
  },
  {
    accessorKey: "task",
    header: "Task",

    cell: ({ row }) => <div className="capitalize">{row.getValue("task")}</div>,
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      const [sortType, setSortType] = useState("");

      const ascSort = () => {
        column.toggleSorting(column.getIsSorted() === "asc");
        setSortType("asc");
      };
      const dscSort = () => {
        column.toggleSorting(column.getIsSorted() === "dsc");
        setSortType("desc");
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Title
              {sortType === "asc" ? (
                <ArrowUp />
              ) : sortType === "desc" ? (
                <ArrowDown />
              ) : (
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => ascSort()}>
              {" "}
              <ArrowUp />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dscSort()}>
              {" "}
              <ArrowDown /> Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <EyeOff />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">
        <div class="flex space-x-2">
          <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
            {row.original.label}
          </div>
          <span className="max-w-[31.25rem] truncate font-medium">
            {row.getValue("title")}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "status",
    filterFn: "arrIncludesSome",
    header: ({ column }) => {
      const [sortType, setSortType] = useState("");

      const ascSort = () => {
        column.toggleSorting(column.getIsSorted() === "asc");
        setSortType("asc");
      };
      const dscSort = () => {
        column.toggleSorting(column.getIsSorted() === "desc");
        setSortType("desc");
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Status
              {sortType === "asc" ? (
                <ArrowUp />
              ) : sortType === "desc" ? (
                <ArrowDown />
              ) : (
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => ascSort()}>
              {" "}
              <ArrowUp />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dscSort()}>
              {" "}
              <ArrowDown /> Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <EyeOff />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase flex items-center">
        {row.getValue("status") === "Done" ? (
          <CircleCheck className="text-muted-foreground size-4 mr-2" />
        ) : row.getValue("status") === "In-progress" ? (
          <Timer className="text-muted-foreground size-4 mr-2" />
        ) : (
          <CircleX className="text-muted-foreground size-4 mr-2" />
        )}{" "}
        {row.getValue("status")}
      </div>
    ),
  },
  {
    accessorKey: "priority",
    filterFn: "arrIncludesSome",
    header: ({ column }) => {
      const [sortType, setSortType] = useState("");

      const ascSort = () => {
        column.toggleSorting(column.getIsSorted() === "asc");
        setSortType("asc");
      };
      const dscSort = () => {
        column.toggleSorting(column.getIsSorted() === "desc");
        setSortType("desc");
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Priority
              {sortType === "asc" ? (
                <ArrowUp />
              ) : sortType === "desc" ? (
                <ArrowDown />
              ) : (
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => ascSort()}>
              {" "}
              <ArrowUp />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dscSort()}>
              {" "}
              <ArrowDown /> Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <EyeOff />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ row }) => {
      const amount = row.getValue("priority");

      // Format the amount as a dollar amount

      return (
        <div className="text-right font-medium flex items-center">
          {amount === "High" ? (
            <ArrowUp className="text-muted-foreground size-4 mr-2" />
          ) : amount === "Low" ? (
            <ArrowDown className="text-muted-foreground size-4 mr-2" />
          ) : (
            <ArrowRight className="text-muted-foreground size-4 mr-2" />
          )}{" "}
          {amount}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    filterFn: "arrIncludesSome",
    header: ({ column }) => {
      const [sortType, setSortType] = useState("");

      const ascSort = () => {
        column.toggleSorting(column.getIsSorted() === "asc");
        setSortType("asc");
      };
      const dscSort = () => {
        column.toggleSorting(column.getIsSorted() === "desc");
        setSortType("desc");
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Created At
              {sortType === "asc" ? (
                <ArrowUp />
              ) : sortType === "desc" ? (
                <ArrowDown />
              ) : (
                <ChevronsUpDown className="ml-2 h-4 w-4" />
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => ascSort()}>
              {" "}
              <ArrowUp />
              Asc
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => dscSort()}>
              {" "}
              <ArrowDown /> Desc
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <EyeOff />
              Hide
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
    cell: ({ row }) => {
      return <div>{row.getValue("created_at")}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,

    header: ({ column }) => {
      return <div>Actions</div>;
    },
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>

            <DropdownMenuItem>
              <div className="flex justify-between items-center w-[100%]">
                <span>Labels</span> <ChevronRight />
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
