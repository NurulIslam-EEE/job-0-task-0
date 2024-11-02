"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { SelectDropDown } from "./SelectDropdown";
import { labelData, priorityData, statusData } from "./TableDataCollection";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Required",
  }),
  label: z.string({
    message: "Required",
  }),
  status: z.string({
    message: "Required",
  }),
  priority: z.string({
    message: "Required",
  }),
});

export function NewTask() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      label: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("fffff", values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mr-2">
          <Plus /> New Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create task</DialogTitle>
          <DialogDescription>
            Fill in the details below to create a new task.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {/* from */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Do a kickflip" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* field 2 */}

              <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Label</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select A Label" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {labelData.map((values) => (
                          <SelectItem key={values.value} value={values.value}>
                            {values.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* field 3 */}

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Status</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select A Status" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {statusData.map((values) => (
                          <SelectItem key={values.value} value={values.value}>
                            {values.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* field 4 */}

              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select A Priority" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {priorityData?.map((values) => (
                          <SelectItem key={values.value} value={values.value}>
                            {values.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* submit btn */}
              <div className="flex justify-end">
                <Button variant="outline" className="mr-2">
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </div>
            </form>
          </Form>

          {/* <Label htmlFor="name" className="text-left">
            Label
          </Label>
          <SelectDropDown title="Select A Label" data={labelData} />
          <Label htmlFor="name" className="text-left">
            Status
          </Label>
          <SelectDropDown title="Select A Status" data={statusData} />
          <Label htmlFor="name" className="text-left">
            Priority
          </Label>
          <SelectDropDown title="Select A Priority" data={priorityData} /> */}
        </div>
        {/* <DialogFooter>
          <Button variant="outline" className="mr-2">
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
