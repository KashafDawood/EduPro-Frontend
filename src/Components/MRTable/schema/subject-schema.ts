import { TableSchema } from "../types";

export const SubjectSchema: TableSchema = {
  styles: { maxHeight: "70vh", width: "93vw" },
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: 200,
    },
    {
      id: "marks",
      accessorKey: "marks",
      header: "Marks",
      size: 200,
    },
    {
      id: "totalMarks",
      accessorKey: "totalMarks",
      header: "Total Marks",
      size: 200,
    },
    {
      id: "percentage",
      accessorKey: "percentage",
      header: "Percentage",
      size: 200,
    },
  ],
};
