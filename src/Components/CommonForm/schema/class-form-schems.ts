import { FormFieldSchema, FormSchema } from "../types";

export const classForm: FormSchema = (): FormFieldSchema[] => {
  return [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "section",
      label: "Section",
    },
  ];
};
