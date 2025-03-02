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
import SingleSelect from "@/components/shard/single-select";

import { toast } from "sonner";
import { zoneService } from "@/services/zone-service";
import { useApi } from "@/hooks/use-api";
const countries = [
  { code: "us", name: "United States" },
  { code: "ca", name: "Canada" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
];

export default function Zone() {
  const [zones, setZones] = useState<ZoneType[]>([
    { id: 1, name: "Test", country: "test country" },
  ]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  useApi(zoneService.getZones, {
      immediate:true,
      immediateParams:{pageNumber:1,pageSize:500},
      onSuccess: (response) => {
        setZones(response.data)
      },
      onError: (err) => {
        console.error("Login failed:", err);
        toast.error("Failed to register");
      },
    });
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
              <SingleSelect 
                control={form.control}
                options={countries}
                name="country"
                label="Country"
                valueKey="code"
                labelKey="name"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </CustomDialog>
    </div>
  );
}
