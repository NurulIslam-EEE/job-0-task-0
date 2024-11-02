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
      const ascSort = () => {
        column.toggleSorting(column.getIsSorted() === "asc");
      };
      const dscSort = () => {
        column.toggleSorting(column.getIsSorted() === "dsc");
      };
      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost">
              Title
              <ArrowDown className="ml-2 h-4 w-4" />
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
            {row.getValue("label")}
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
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Status
          <ChevronsUpDown className="ml-2 h-4 w-4" />
        </Button>
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
    header: () => <div className="text-right">Priority</div>,
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
    id: "actions",
    enableHiding: false,
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
