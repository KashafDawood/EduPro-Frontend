import { FormSchema } from "../types";

export const subjectForm: FormSchema = () => {
  return [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
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
