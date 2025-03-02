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
import { zoneService } from "@/services/zone-service";
import { useApi } from "@/hooks/use-api";
import { countryService } from "@/services/country-service";
import { CountryType } from "@/lib/types/country";
import { toast } from "sonner";

export default function Zone() {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [zones, setZones] = useState<ZoneType[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
 const {execute:fetchZones}= useApi(zoneService.getZones, {
    immediate: true,
    immediateParams: { pageNumber: 1, pageSize: 500 },
    onSuccess: (response) => {
      setZones(response.data);
    },
    onError: (err) => {
      console.error("Zone load failed:", err);
    },
  });
  useApi(countryService.getCountries, {
    immediate: true,
    immediateParams: { pageNumber: 1, pageSize: 500 },
    onSuccess: (res) => {
      setCountries(res.data);
    },
    onError: (err) => {
      console.error("Country failed:", err);
    },
  });
  const { execute:saveZone } = useApi(zoneService.createZones, {
    onSuccess: (res) => {
      if (res.isSuccess) {
        setZones([...zones, res.data]);
        toast.success(res.message);
        setIsAdd(false);
      } else {
        toast.success(res.message);
      }
    },
    onError: (err) => {
      console.error("Zone save failed:", err);
    },
  });
  const { execute:updateZone } = useApi(zoneService.updateZone, {
    onSuccess: (res) => {
      if (res.isSuccess) {
        toast.success(res.message);
        fetchZones( { pageNumber: 1, pageSize: 500 });
        setIsAdd(false);
      } else {
        toast.success(res.message);
      }
    },
    onError: (err) => {
      console.error("Zone update failed:", err);
    },
  });
  const { execute:deleteZone } = useApi(zoneService.deleteZone, {
    onSuccess: (res) => {
      console.log(res,"delete")
      if (res.isSuccess) {
        fetchZones( { pageNumber: 1, pageSize: 500 });
        toast.success(res.message);
      } else {
        toast.success(res.message);
      }
    },
    onError: (err) => {
      console.error("Zone del failed:", err);
    },
  });
  const form = useForm<z.infer<typeof zoneSchema>>({
    resolver: zodResolver(zoneSchema),
    defaultValues: {
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof zoneSchema>) {
    if(isUpdate){
      updateZone({id:values.id,name:values.name,countryId:values.CountryId})
    }else{
      saveZone({ name: values.name, countryId: values.CountryId });
    }

  }

  const handleEditClick = (editZone: ZoneType) => {
    console.log("Edit Clicked:", editZone);
    setIsUpdate(true);
    form.reset({name:editZone.name,CountryId:+editZone.countryId,id:editZone.id});
    setIsAdd(true);
  };

  const handleDeleteClick = (id: number) => {
    console.log("Delete Clicked:", id);
    deleteZone(id);
  };
  const addNew = () => {
    setIsAdd(true);
    setIsUpdate(false);
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
                name="CountryId"
                label="Country"
                valueKey="id"
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
