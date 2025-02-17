import { DocumentNode } from "graphql";

export interface FormFieldSchema {
  name: string;
  label?: string;
  type:
    | "text"
    | "select"
    | "date"
    | "number"
    | "cnic"
    | "autoComplete"
    | "multiselect"
    | "photo";
  required?: boolean;
  options?: string[];
  query?: DocumentNode;
  optional?: string;
}

export type FormSchema = () => FormFieldSchema[];
