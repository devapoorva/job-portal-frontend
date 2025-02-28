"use client";
import { DataTable } from "@/components/shard/data-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getColumns } from "./column";
import { ZoneType } from "@/lib/types/zone";
import { CustomDialog } from "@/components/shard/custom-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zoneSchema } from "@/lib/schema/zone";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Zone() {
  const [zones, setZones] = useState<ZoneType[]>([
    { id: 1, name: "Test", country: "test country" },
  ]);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const form = useForm<z.infer<typeof zoneSchema>>({
    resolver: zodResolver(zoneSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof zoneSchema>) {
    console.log(values);
    setIsAdd(false);
    setZones([...zones,{id:zones.length+1,name:values.name,country:values.country}])
  }

  const handleEditClick = (user: ZoneType) => {
    console.log("Edit Clicked:", user);
  };

  const handleDeleteClick = (id: number) => {
    console.log("Delete Clicked:", id);
  };
  const addNew = () => {
    setIsAdd(true);
    form.reset();
  };
  return (
    <div className="px-1 py-1 w-full">
      <h1 className="text-xl font-medium">Zone</h1>
      <div className="flex justify-end mb-2">
        <Button onClick={addNew} size={"sm"}>
          Add
        </Button>
      </div>
      <DataTable
        columns={getColumns(handleEditClick, handleDeleteClick)}
        data={zones}
      />
      <CustomDialog open={isAdd} title="Zone" onOpenChange={setIsAdd}>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zone</FormLabel>
                    <FormControl>
                      <Input placeholder="zone name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">India</SelectItem>
                        <SelectItem value="2">USA</SelectItem>
                        <SelectItem value="3">China</SelectItem>
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </CustomDialog>
    </div>
  );
}
