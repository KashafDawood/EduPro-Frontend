import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { schema } from "./schema";

interface MRTableProps {
  name: keyof typeof schema;
  data: JSON[];
}

// const sampleData = [
//   { name: "John Doe", age: 30 },
//   { name: "Jane Doe", age: 25 },
// ];

function MRTable({ name, data }: MRTableProps) {
  const meta = schema[name];

  const table = useMaterialReactTable({
    columns: meta.TableSchema,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true, //enable a feature for all columns
    enableGlobalFilter: false, //turn off a feature
  });

  return <MaterialReactTable table={table} />;
}

export default MRTable;
