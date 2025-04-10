import { TableSchema } from "../types";
import { defaultStyles, defaultSize } from "./schema-helpers";

export const ExpenseSchema: TableSchema = {
  styles: defaultStyles,
  TableSchema: [
    {
      id: "salaries",
      accessorKey: "salaries",
      header: "Salaries",
      size: defaultSize,
    },
    {
      id: "buildingExpense",
      accessorKey: "buildingExpense",
      header: "Building Expense",
      size: defaultSize,
    },
    {
      id: "bills",
      accessorKey: "bills",
      header: "Bills",
      size: defaultSize,
    },
    {
      id: "miscellaneousExpense",
      accessorKey: "miscellaneousExpense",
      header: "Miscellaneous Expense",
      size: defaultSize,
    },
    {
      id: "month",
      accessorKey: "month",
      header: "Month",
      size: defaultSize,
    },
    {
      id: "year",
      accessorKey: "year",
      header: "Year",
      size: defaultSize,
    },
  ],
};
