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
    // {
    //   id: "user.email",
    //   accessorKey: "user.email",
    //   header: "Email",
    //   size: 200,
    // },
  ],
};

// data = [
//   {
//     name: "talha",
//     age: 60,
//     user: { email: "email" },
//   },
// ];
