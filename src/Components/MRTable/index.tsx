import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { schema } from "./schema";

interface MRTableProps {
  name: keyof typeof schema;
  loading: boolean;
  data: JSON[];
  additionalRowProps: any;
}

function MRTable({
  name,
  data = [],
  loading,
  additionalRowProps,
}: MRTableProps) {
  const meta = schema[name];

  const table = useMaterialReactTable({
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    columns: meta.TableSchema,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableRowSelection: true, //enable some features
    enableColumnOrdering: true, //enable a feature for all columns
    enableGlobalFilter: true, //turn off a feature
    state: {
      isLoading: loading, //cell skeletons and loading overlay}
    },
    muiTableContainerProps: { sx: { ...(meta?.styles || {}) } },
    // enableRowVirtualization: true,
    // enableColumnVirtualization: true,
    enablePagination: false,
    muiTableBodyRowProps: ({ row }) => ({
      onClick: () => {
        additionalRowProps?.onRowClick(row);
      },
      sx: {
        cursor: additionalRowProps?.onRowClick ? "pointer" : "",
      },
    }),
  });

  return <MaterialReactTable table={table} />;
}

export default MRTable;
