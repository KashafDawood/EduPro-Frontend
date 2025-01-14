import { TableSchema } from "../types";
import { defaultStyles, defaultSize } from "./schema-helpers";

export const ClassSchema: TableSchema = {
  styles: defaultStyles,
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: defaultSize,
    },
    {
      id: "section",
      accessorKey: "section",
      header: "Section",
      size: 200,
    },
  ],
};
