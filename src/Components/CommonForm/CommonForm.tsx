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
import { useState } from "react";
import { FormFieldSchema } from "./types";
import { Autocomplete } from "../ui/autocomplete";
import useFetchData from "@/hooks/useFetch";

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
  const { control, handleSubmit, getValues, setValue } = useForm();
  const formSchema = FORMS[formName](getValues, setValue);
  const [isOpen, setIsOpen] = useState(false);

  const queryObj = formSchema.filter(
    (field: FormFieldSchema) => field.name === "fetch"
  );

  const querydata = queryObj.map((item, index: number) => ({
    name: item.label,
    data: useFetchData(item.query, item.optional, isOpen),
    key: `${item.label}-${index}`,
  }));
  const autocompleteOptions = querydata.filter(
    (item) => item.name === "fetchAutocomplete"
  );

  // const data = useFetchData(query, optional);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Slideout
      formTitle={formTitle}
      buttonLabel={buttonLabel}
      handleSubmit={handleSubmit(onSubmit)}
      handleIsOpen={setIsOpen}
    >
      <form className="space-y-4">
        {formSchema.map((field: FormFieldSchema, index: number) => (
          <div key={`${field.name}-${index}`}>
            <Controller
              control={control}
              name={field.name}
              rules={{ required: field.required }}
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
                      <>
                        {autocompleteOptions.map((item) => (
                          <Autocomplete
                            key={item.key}
                            options={item.data}
                            value={value}
                            placeholder={field.label ?? ""}
                            onChange={onChange}
                          />
                        ))}
                      </>
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
          </div>
        ))}
      </form>
    </Slideout>
  );
};
