"use client";

import * as React from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ChevronsUpDown,
  CircleCheck,
  CircleHelp,
  CirclePlus,
  CircleX,
  Minus,
  Plus,
  Timer,
  Type,
} from "lucide-react";

// const SearchData = [
//   {
//     value: "todo",
//     icon: <CircleHelp />,
//     label: "Todo",
//   },
//   {
//     value: "in-progress",
//     label: "In-progress",
//     icon: <Timer />,
//   },
//   {
//     value: "done",
//     label: "Done",
//     icon: <CircleCheck />,
//   },
//   {
//     value: "canceled",
//     label: "Canceled",
//     icon: <CircleX />,
//   },
//   ,
// ];

export function AdvancedFilterDropDown({
  value2,
  setValue2,
  SearchData,
  title,
}) {
  const [open, setOpen] = React.useState(false);
  //   const [value2, setValue2] = React.useState([]);

  //   console.log("vvv", value2);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className={`ml-auto`} mr-2>
          <ChevronsUpDown className="mr-2 h-4 w-4" /> Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                value="Title"
                onSelect={(currentValue) => {
                  const match = value2.filter((a) => a === currentValue);
                }}
              >
                <Type />
                Title
              </CommandItem>
              <CommandItem
                value="status"
                onSelect={(currentValue) => {
                  const match = value2.filter((a) => a === currentValue);
                }}
              >
                <CheckIcon className="" />
                Status
              </CommandItem>
              <CommandItem
                value="priority"
                onSelect={(currentValue) => {
                  const match = value2.filter((a) => a === currentValue);
                }}
              >
                <CheckIcon className="" />
                Priority
              </CommandItem>
              <hr />
              <CommandItem
                value="Advanced "
                onSelect={(currentValue) => {
                  const match = value2.filter((a) => a === currentValue);
                }}
              >
                <Plus />
                Advanced filter
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
