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
    accessorKey: "countryId",
    header: "Country",
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