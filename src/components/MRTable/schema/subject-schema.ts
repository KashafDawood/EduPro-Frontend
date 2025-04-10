import { TableSchema } from "../types";
import { defaultStyles, defaultSize } from "./schema-helpers";

export const SubjectSchema: TableSchema = {
  styles: defaultStyles,
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: defaultSize,
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
