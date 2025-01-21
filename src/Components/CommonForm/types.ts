import { DocumentNode } from "graphql";

export interface FormFieldSchema {
  name: string;
  label?: string;
  type?: "text" | "number" | "date" | "select" | "fetch" | "autoComplete";
  optional?: string;
  options?: string[];
  required?: boolean;
  query?: DocumentNode;
}

export type FormSchema = () => FormFieldSchema[];
