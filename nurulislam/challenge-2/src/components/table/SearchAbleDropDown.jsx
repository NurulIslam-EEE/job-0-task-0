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
  CircleCheck,
  CircleHelp,
  CirclePlus,
  CircleX,
  Minus,
  Timer,
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

export function SearchAbleDropDown({ value2, setValue2, SearchData, title }) {
  const [open, setOpen] = React.useState(false);
  //   const [value2, setValue2] = React.useState([]);

  //   console.log("vvv", value2);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="ml-2 border-dashed"
          aria-expanded={open}
        >
          <CirclePlus /> {title}
          {value2?.length > 0 && <Minus className="rotate-90 text-gray-400" />}
          {value2?.length < 3 &&
            value2?.length > 0 &&
            value2?.map((val) => (
              <div className="bg-[#f4f4f5] p-1 rounded-sm">{val}</div>
            ))}
          {value2?.length > 2 && (
            <div className="bg-[#f4f4f5] p-1 rounded-sm">
              {value2?.length} selected
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {SearchData.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    const match = value2.filter((a) => a === currentValue);
                    // console.log("mm", match);
                    match?.length > 0
                      ? setValue2(value2.filter((a) => a !== currentValue))
                      : setValue2([...value2, currentValue]);
                    setOpen(false);
                  }}
                >
                  {value2?.includes(framework.value) ? (
                    <div className="h-[16px] w-[16px] bg-black rounded-sm flex justify-center items-center">
                      {" "}
                      <CheckIcon className="text-white" />
                    </div>
                  ) : (
                    <div className="h-[16px] w-[16px] border border-black rounded-sm flex justify-center items-center">
                      {" "}
                    </div>
                  )}{" "}
                  {framework.icon}
                  {framework.label}
                </CommandItem>
              ))}
              <hr />
              <CommandItem
                className="flex justify-center mt-1"
                onSelect={() => setValue2([])}
              >
                Clear filters
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
