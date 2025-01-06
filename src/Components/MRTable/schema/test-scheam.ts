import { MRT_ColumnDef } from "material-react-table";

export const TestSchema: { TableSchema: MRT_ColumnDef<JSON, unknown>[] } = {
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: 200,
    },
    {
      id: "age",
      accessorKey: "age",
      header: "Age",
      size: 200,
    },
  ],
};
