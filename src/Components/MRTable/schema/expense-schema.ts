import { TableSchema } from "../types";

export const ExpenseSchema: TableSchema = {
  styles: { maxHeight: "70vh", width: "93vw" },
  TableSchema: [
    {
      id: "salaries",
      accessorKey: "salaries",
      header: "Salaries",
      size: 200,
    },
    {
      id: "buildingExpense",
      accessorKey: "buildingExpense",
      header: "Building Expense",
      size: 200,
    },
    {
      id: "bills",
      accessorKey: "bills",
      header: "Bills",
      size: 200,
    },
    {
      id: "miscellaneousExpense",
      accessorKey: "miscellaneousExpense",
      header: "Miscellaneous Expense",
      size: 200,
    },
    {
      id: "month",
      accessorKey: "month",
      header: "Month",
      size: 200,
    },
    {
      id: "year",
      accessorKey: "year",
      header: "Year",
      size: 200,
    },
  ],
};
