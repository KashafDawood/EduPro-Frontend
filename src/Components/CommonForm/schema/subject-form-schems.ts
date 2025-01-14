import { FormFieldSchema, FormSchema } from "../types";

export const subjectForm: FormSchema = (): FormFieldSchema[] => {
  return [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "marks",
      label: "Marks",
      type: "number",
    },
    {
      name: "totalMarks",
      label: "Total Marks",
      type: "number",
    },
    {
      name: "percentage",
      label: "Percentage",
      type: "number",
    },
  ];
};
