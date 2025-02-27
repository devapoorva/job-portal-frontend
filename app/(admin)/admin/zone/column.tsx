"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArchiveX, FilePenLine } from "lucide-react";
import {ZoneType} from "@/lib/types/zone"


export const getColumns = (
  onEditClick: (user: ZoneType) => void,
  onDeleteClick: (id: number) => void
): ColumnDef<ZoneType>[] => [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => onEditClick(row.original)}
        >
          <FilePenLine />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => onDeleteClick(row.original.id)}
        >
          <ArchiveX color="red" />
        </Button>
      </div>
    ),
  },
];