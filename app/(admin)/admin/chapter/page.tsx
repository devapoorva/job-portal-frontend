"use client";
import { DataTable } from "@/components/shard/data-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getColumns } from "./column";
import { ChaptetType } from "@/lib/types/chapter";
import { CustomDialog } from "@/components/shard/custom-dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { chapterSchema } from "@/lib/schema/chapter";
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


export default function Chapter() {
  const [zones, setZones] = useState<ChaptetType[]>([
    { id: 1, name: "Test", zone: "test zone" },
  ]);
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const form = useForm<z.infer<typeof chapterSchema>>({
    resolver: zodResolver(chapterSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof chapterSchema>) {
    console.log(values);
    setIsAdd(false);
    setZones([...zones,{id:zones.length+1,name:values.name,zone:values.zone}])
  }

  const handleEditClick = (chapter: ChaptetType) => {
    console.log("Edit Clicked:", chapter);
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
      <h1 className="text-xl font-medium">Chapter</h1>
      <div className="flex justify-end mb-2">
        <Button onClick={addNew} size={"sm"}>
          Add
        </Button>
      </div>
      <DataTable
        columns={getColumns(handleEditClick, handleDeleteClick)}
        data={zones}
      />
      <CustomDialog open={isAdd} title="Chapter" onOpenChange={setIsAdd}>
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
                      <Input placeholder="Chapter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zone</FormLabel>
                    <Select onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="1">Chandighar</SelectItem>
                        <SelectItem value="2">Delhi</SelectItem>
                        <SelectItem value="3">Pune</SelectItem>
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
