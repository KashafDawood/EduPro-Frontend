import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "../ui/datepicker";
import { FORMS } from "./schema";
import { Slideout } from "./Slideout";
import { FormFieldSchema } from "./types";
import AsyncAutocomplete from "../Custom/autocomplete";
import { DocumentNode } from "graphql";
import AsyncMultiselect from "../Custom/multiselect";
import { zodResolver } from "@hookform/resolvers/zod";
import { generateZodSchema, transformFormData } from "./commonForm-helper";
import { useState } from "react";

interface CommonFormProps {
  formName: keyof typeof FORMS;
  formTitle: string;
  buttonLabel: string;
  onSubmit: (data: Record<string, string | number | Date | null>) => void;
}

interface DefaultValues {
  [key: string]: string | null;
}

export const CommonForm: React.FC<CommonFormProps> = ({
  formName,
  formTitle,
  buttonLabel,
  onSubmit,
}) => {
  const formSchema = FORMS[formName]();
  const zodSchema = generateZodSchema(formSchema);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: formSchema.reduce(
      (defaults: DefaultValues, field: FormFieldSchema) => {
        defaults[field.name] = field.type === "date" ? null : "";
        return defaults;
      },
      {} as DefaultValues
    ),
  });

  const handleFormSubmit = (data: Record<string, string | number | null>) => {
    const transformedData = transformFormData(data, formSchema);
    onSubmit(transformedData);
    reset();
    setIsSheetOpen(false);
  };

  return (
    <Slideout
      formTitle={formTitle}
      buttonLabel={buttonLabel}
      isSheetOpen={isSheetOpen}
      setIsSheetOpen={setIsSheetOpen}
      handleSubmit={handleSubmit(handleFormSubmit)}
    >
      <form className="space-y-4">
        {formSchema.map((field: FormFieldSchema, index: number) => (
          <div key={`${field.name}-${index}`}>
            <Controller
              control={control}
              name={field.name}
              render={({ field: { value, onChange } }) => {
                switch (field.type) {
                  case "select":
                    return (
                      <Select
                        onValueChange={onChange}
                        value={value ?? undefined}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={field.label} />
                        </SelectTrigger>
                        <SelectContent>
                          {"options" in field &&
                            field.options?.map((option: string) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                        </SelectContent>
                      </Select>
                    );

                  case "autoComplete":
                    return (
                      <AsyncAutocomplete
                        query={field.query as DocumentNode}
                        optional={field.optional as string}
                        value={value ?? ""}
                        placeholder={`Select ${field.label} ...`}
                        onChange={onChange}
                      />
                    );

                  case "multiselect":
                    return (
                      <AsyncMultiselect
                        query={field.query as DocumentNode}
                        optional={field.optional as string}
                        value={Array.isArray(value) ? value : []}
                        placeholder={`Select ${field.label} ...`}
                        onChange={(selectedOptions) => {
                          onChange(selectedOptions);
                        }}
                      />
                    );

                  case "date":
                    return (
                      <DatePicker
                        selected={value ? new Date(value) : undefined}
                        onSelect={onChange}
                        placeholder={field.label}
                      />
                    );

                  case "text":
                    return (
                      <Input
                        type="text"
                        value={value ?? ""}
                        onChange={onChange}
                        placeholder={field.label}
                      />
                    );

                  case "number":
                    return (
                      <Input
                        type="number"
                        value={value ?? ""}
                        onChange={onChange}
                        placeholder={field.label}
                      />
                    );

                  default:
                    return <></>;
                }
              }}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </form>
    </Slideout>
  );
};
