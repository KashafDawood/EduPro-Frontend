export interface FormFieldSchema {
  name: string;
  label: string;
  type?: "text" | "number" | "date" | "select";
  options?: string[];
  required?: boolean;
}

export type FormSchema = () => FormFieldSchema[];
