"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArchiveX, FilePenLine } from "lucide-react";
import {ChaptertDetailsType, ChaptetType} from "@/lib/types/chapter"


export const getColumns = (
  onEditClick: (chapter: ChaptetType) => void,
  onDeleteClick: (id: number) => void
): ColumnDef<ChaptertDetailsType>[] => [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "zoneId",
    header: "Zone",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onEditClick(row.original)}
        >
          <FilePenLine />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDeleteClick(row.original.id)}
        >
          <ArchiveX color="red" />
        </Button>
      </div>
    ),
  },
];