import { FormFieldSchema, FormSchema } from "../types";

export const expenseForm: FormSchema = (): FormFieldSchema[] => {
  return [
    {
      name: "salaries",
      label: "Salaries",
      type: "number",
    },
    {
      name: "buildingExpense",
      label: "Building Expense",
      type: "number",
    },
    {
      name: "bills",
      label: "Bill",
      type: "number",
    },
    {
      name: "miscellaneousExpense",
      label: "Miscellaneous Expense",
      type: "number",
    },
    {
      name: "month",
      label: "Month",
      type: "number",
    },
    {
      name: "year",
      label: "Year",
      type: "number",
    },
  ];
};
