import * as z from "zod";
import { FormFieldSchema } from "./types";

export const generateZodSchema = (formSchema: FormFieldSchema[]) => {
  const zodFields = formSchema.reduce((schema, field) => {
    let fieldValidator: z.ZodTypeAny;

    switch (field.type) {
      case "text":
        fieldValidator = z.string();
        if (field.required) {
          fieldValidator = fieldValidator.min(1, `${field.label} is required`);
        }
        break;

      case "number":
        fieldValidator = z.string();
        if (field.required) {
          fieldValidator = fieldValidator.min(1, `${field.label} is required`);
        }
        break;

      case "date":
        fieldValidator = z.date().nullable();
        if (field.required) {
          fieldValidator = fieldValidator.refine(
            (date) => !!date,
            `${field.label} is required`
          );
        }
        break;

      case "autoComplete":
      case "select":
        fieldValidator = z.string();
        if (field.required) {
          fieldValidator = fieldValidator.min(1, `${field.label} is required`);
        }
        break;

      case "multiselect":
        fieldValidator = z.array(z.string());
        if (field.required) {
          fieldValidator = fieldValidator.min(1, `${field.label} is required`);
        }
        break;

      default:
        fieldValidator = z.any();
    }

    return { ...schema, [field.name]: fieldValidator };
  }, {});

  return z.object(zodFields);
};

export const transformFormData = (
  data: Record<string, any>,
  formSchema: FormFieldSchema[]
) => {
  return Object.keys(data).reduce((transformedData, key) => {
    const field = formSchema.find((f) => f.name === key);

    if (!field) return transformedData;

    switch (field.type) {
      case "date":
        transformedData[key] = data[key] ? new Date(data[key]) : null;
        break;

      case "number":
        transformedData[key] = data[key]
          ? parseFloat(data[key]) || parseInt(data[key], 10)
          : null;
        break;

      default:
        transformedData[key] = data[key];
    }

    return transformedData;
  }, {} as Record<string, any>);
};
