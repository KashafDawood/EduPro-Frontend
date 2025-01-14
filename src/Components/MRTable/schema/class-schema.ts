import { TableSchema } from "../types";

export const ClassSchema: TableSchema = {
  styles: { maxHeight: "70vh", width: "93vw" },
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: 200,
    },
    {
      id: "section",
      accessorKey: "section",
      header: "Section",
      size: 200,
    },
  ],
};
