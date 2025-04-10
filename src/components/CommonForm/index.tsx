import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";

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
import { useToast } from "@/hooks/use-toast";
import { CNICInput } from "@/components/Custom/cnic-input";
import { Label } from "@/components/ui/label";
import CustomSelect from "../Custom/select";
import ProfilePictureUpload from "../Custom/profile-picture-upload";

interface CommonFormProps {
  formName: keyof typeof FORMS;
  formTitle: string;
  buttonLabel: string;
  onSubmit: (
    data: Record<string, string | number | Date | null>,
    photoFile: File | null
  ) => Promise<boolean>;
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
  const { toast } = useToast();
  const [photoFile, setPhotoFile] = useState<File | null>(null);

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

  const handleFormSubmit = async (
    data: Record<string, string | number | null>
  ) => {
    const transformedData = transformFormData(data, formSchema);
    const success = await onSubmit(transformedData, photoFile);

    if (success) {
      toast({
        title: `${formTitle.split(" ")[0]} added successfully!`,
        description: new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      });
      reset();
      setIsSheetOpen(false);
      setPhotoFile(null);
    }
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
          <div key={`${field.name}-${index}`} className="space-y-1.5">
            <Label htmlFor={field.name} className="text-sm font-medium">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </Label>
            <Controller
              control={control}
              name={field.name}
              render={({ field: { value, onChange } }) => {
                switch (field.type) {
                  case "select":
                    return (
                      <CustomSelect
                        onChange={onChange}
                        value={value ?? ""}
                        field={{
                          ...field,
                          label: field.label ?? "",
                          options: field.options ?? [],
                        }}
                      />
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
                        id={field.name}
                        type="text"
                        value={value ?? ""}
                        onChange={onChange}
                        placeholder={`Enter ${field.label}`}
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

                  case "cnic":
                    return (
                      <CNICInput
                        value={value ?? ""}
                        onChange={onChange}
                        placeholder={field.label}
                      />
                    );

                  case "photo":
                    return (
                      <div className="flex justify-center">
                        <ProfilePictureUpload
                          value={value ?? ""}
                          onChange={(file) => {
                            setPhotoFile(file);
                            onChange(file?.name || "");
                          }}
                        />
                      </div>
                    );

                  default:
                    return <></>;
                }
              }}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-xs">
                {errors[field.name]?.message}
              </p>
            )}
          </div>
        ))}
      </form>
    </Slideout>
  );
};
