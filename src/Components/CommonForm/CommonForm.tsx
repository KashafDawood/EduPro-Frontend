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

interface CommonFormProps {
  formName: keyof typeof FORMS;
  formTitle: string;
  buttonLabel: string;
}

export const CommonForm: React.FC<CommonFormProps> = ({
  formName,
  formTitle,
  buttonLabel,
}) => {
  const formSchema = FORMS[formName]();
  const zodSchema = generateZodSchema(formSchema);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(zodSchema),
    defaultValues: formSchema.reduce((defaults, field) => {
      defaults[field.name] = field.type === "date" ? null : "";
      return defaults;
    }, {} as Record<string, any>),
  });

  const onSubmit = (data: any) => {
    const transformedData = transformFormData(data, formSchema);
    console.log("Transformed Form Data:", transformedData);
    // Perform further actions with transformedData
  };

  return (
    <Slideout
      formTitle={formTitle}
      buttonLabel={buttonLabel}
      handleSubmit={handleSubmit(onSubmit)}
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
                      <Select onValueChange={onChange} value={value}>
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
                        value={value}
                        placeholder={`Select ${field.label} ...`}
                        onChange={onChange}
                      />
                    );

                  case "multiselect":
                    return (
                      <AsyncMultiselect
                        query={field.query as DocumentNode}
                        value={value || []}
                        placeholder={`Select ${field.label} ...`}
                        onChange={(selectedOptions) => {
                          onChange(selectedOptions);
                        }}
                      />
                    );

                  case "date":
                    return (
                      <DatePicker
                        selected={value}
                        onSelect={onChange}
                        placeholder={field.label}
                      />
                    );

                  case "text":
                    return (
                      <Input
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={field.label}
                      />
                    );

                  case "number":
                    return (
                      <Input
                        type="number"
                        value={value}
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
