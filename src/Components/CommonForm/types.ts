import { DocumentNode } from "graphql";

export type FormFieldType =
  | "text"
  | "number"
  | "select"
  | "date"
  | "autoComplete"
  | "multiselect"
  | "cnic";

export interface FormFieldSchema {
  name: string;
  label?: string;
  type?: FormFieldType;
  optional?: string;
  options?: string[];
  required?: boolean;
  query?: DocumentNode;
}

export type FormSchema = () => FormFieldSchema[];
