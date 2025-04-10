import { MRT_ColumnDef } from "material-react-table";

export interface TableSchema {
  TableSchema: MRT_ColumnDef<JSON, unknown>[];
  styles: { [key: string]: string };
}
