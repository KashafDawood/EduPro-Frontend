import { TextFieldProps } from "@mui/material";
import {
  FieldValues,
  UseFormGetValues,
  UseFormSetValue,
} from "react-hook-form";

export interface TextFieldItem extends Omit<TextFieldProps, "name"> {
  name: string;
  label: string;
  required?: boolean;
}

export type FormFieldSchema = TextFieldItem;
export type FormSchema = (
  getValues: UseFormGetValues<FieldValues>,
  setValue: UseFormSetValue<FieldValues>
) => TextFieldItem[];
