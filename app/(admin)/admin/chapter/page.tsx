"use client";
import { DataTable } from "@/components/shard/data-table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { getColumns } from "./column";
import { ChaptertDetailsType, ChaptetType } from "@/lib/types/chapter";
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
import { chapterService } from "@/services/chapter-service";
import { useApi } from "@/hooks/use-api";
import { zoneService } from "@/services/zone-service";
import { ZoneType } from "@/lib/types/zone";
import SingleSelect from "@/components/shard/single-select";
import { toast } from "sonner";

export default function Chapter() {
  const [chapters, setChapter] = useState<ChaptertDetailsType[]>([]);
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [zones, setZones] = useState<ZoneType[]>([]);
  const form = useForm<z.infer<typeof chapterSchema>>({
    resolver: zodResolver(chapterSchema),
    defaultValues: {
      name: "",
    },
  });
  const { execute: fetchChapter } = useApi(chapterService.getChapters, {
    immediate: true,
    immediateParams: { pageNumber: 1, pageSize: 500 },
    onSuccess: (res) => {
      if (res.isSuccess) {
        setChapter(res.data);
      }
    },
    onError: (err) => {
      console.error("Chapter load failed:", err);
    },
  });
  useApi(zoneService.getZones, {
    immediate: true,
    immediateParams: { pageNumber: 1, pageSize: 500 },
    onSuccess: (response) => {
      setZones(response.data);
    },
    onError: (err) => {
      console.error("Zone load failed:", err);
    },
  });
  const { execute:saveChapter } = useApi(chapterService.saveChapter, {
    onSuccess: (res) => {
      if (res.isSuccess) {
        // setZones([...chapters, res.data]);
        fetchChapter({ pageNumber: 1, pageSize: 100 });
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
  function onSubmit(values: z.infer<typeof chapterSchema>) {
    console.log(values);
    saveChapter({name:values.name,zoneId:values.zoneId,cityId:3})
    setIsAdd(false);
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
        data={chapters}
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
                    <FormLabel>Chapter</FormLabel>
                    <FormControl>
                      <Input placeholder="Chapter name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SingleSelect
                control={form.control}
                options={zones}
                name="zoneId"
                label="Zone"
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
