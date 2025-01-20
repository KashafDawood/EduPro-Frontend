import { DocumentNode } from "graphql";

export interface FormFieldSchema {
  name: string;
  label?: string;
  type?: "text" | "number" | "date" | "select" | "fetch";
  options?: string[];
  required?: boolean;
  query?: DocumentNode;
}

export type FormSchema = () => FormFieldSchema[];
