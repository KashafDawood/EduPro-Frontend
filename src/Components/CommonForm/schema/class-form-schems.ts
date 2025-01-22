import { FormSchema } from "../types";

export const classForm: FormSchema = () => {
  return [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "section",
      label: "Section",
      type: "text",
      required: true,
    },
  ];
};
