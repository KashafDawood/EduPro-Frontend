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
import { useMemo, useState } from "react";
import { useLazyQuery } from "@apollo/client/react/hooks";
import { FormFieldSchema } from "./types";
import { Autocomplete } from "../ui/autocomplete";

interface CommonFormProps {
  formName: keyof typeof FORMS;
}

interface autoOptionType {
  _id: string;
  name: string;
  section: string;
}

export const CommonForm: React.FC<CommonFormProps> = ({ formName }) => {
  const { control, handleSubmit, getValues, setValue } = useForm();
  const formSchema = FORMS[formName](getValues, setValue);
  const [isOpen, setIsOpen] = useState(false);

  const fetchSchema = formSchema.find(
    (field: FormFieldSchema) => field.type === "fetch" && field.query
  );

  const [fetchData, { data }] = useLazyQuery(fetchSchema?.query);

  const extractedData = useMemo(() => {
    if (isOpen) {
      fetchData();
      if (data) {
        const [key] = Object.keys(data);
        return data[key]?.map((item: autoOptionType) => ({
          id: item._id,
          name: item.name + " " + item.section,
        }));
      }
    }
    return [];
  }, [data, isOpen, fetchData]);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Slideout
      formTitle="Add Student"
      buttonLabel="Open Form"
      handleSubmit={handleSubmit(onSubmit)}
      handleIsOpen={setIsOpen}
    >
      <form className="space-y-4">
        {formSchema.map((field: FormFieldSchema) => (
          <div key={field.name}>
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
                      <Autocomplete
                        options={extractedData}
                        value={value}
                        onChange={onChange}
                      />
                    );

                  case "date":
                    return (
                      <DatePicker
                        selected={value}
                        onSelect={onChange}
                        placeholder="Pick a date"
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
