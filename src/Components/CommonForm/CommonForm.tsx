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
import { useEffect } from "react";
import { useQuery } from "@apollo/client/react/hooks";
import { FormFieldSchema } from "./types";

interface CommonFormProps {
  formName: keyof typeof FORMS;
}

export const CommonForm: React.FC<CommonFormProps> = ({ formName }) => {
  const { control, handleSubmit, getValues, setValue } = useForm();
  const formSchema = FORMS[formName](getValues, setValue);

  const fetchSchema = formSchema.find(
    (field: FormFieldSchema) => field.type === "fetch" && field.query
  );

  const { data, error } = useQuery(fetchSchema?.query, {
    skip: !fetchSchema?.query,
  });

  useEffect(() => {
    if (data) {
      console.log(data);
    }
    if (error) {
      console.error("Error fetching classes:", error);
    }
  }, [data, error]);

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
  };

  return (
    <Slideout
      formTitle="Add Student"
      buttonLabel="Open Form"
      handleSubmit={handleSubmit(onSubmit)}
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

                  // case "multi-select":
                  //   return (
                  //     <Select onValueChange={(newValue) => onChange(newValue)} value={value} multiple>
                  //       <SelectTrigger>
                  //         <SelectValue placeholder={field.label} />
                  //       </SelectTrigger>
                  //       <SelectContent>
                  //         {field.options?.map((option) => (
                  //           <SelectItem key={option} value={option}>
                  //             {option}
                  //           </SelectItem>
                  //         ))}
                  //       </SelectContent>
                  //     </Select>
                  //   );

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
