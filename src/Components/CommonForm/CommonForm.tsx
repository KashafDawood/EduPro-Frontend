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
import AsyncAutocomplete from "../Custom/autocomplete";
import { DocumentNode } from "graphql";

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

  // const queryObj = formSchema.filter(
  //   (field: FormFieldSchema) => field.name === "fetch"
  // );

  // const querydata = queryObj.map((item, index: number) => ({
  //   name: item.label,
  //   data: useFetchData(item.query, item.optional, isOpen),
  //   key: `${item.label}-${index}`,
  // }));

  // const autocompleteOptions = querydata.filter(
  //   (item) => item.name === "fetchAutocomplete"
  // );

  // const multiselectOptions = querydata.filter(
  //   (item) => item.name === "fetchMultiselect"
  // );

  // const OPTIONS: Option[] = [
  //   { label: "nextjs", value: "nextjs" },
  //   { label: "React", value: "react" },
  //   { label: "Remix", value: "remix" },
  //   { label: "Vite", value: "vite" },
  //   { label: "Nuxt", value: "nuxt" },
  //   { label: "Vue", value: "vue" },
  //   { label: "Svelte", value: "svelte" },
  //   { label: "Angular", value: "angular" },
  //   { label: "Ember", value: "ember", disable: true },
  //   { label: "Gatsby", value: "gatsby", disable: true },
  //   { label: "Astro", value: "astro" },
  // ];

  // console.log(multiselectOptions);

  // // const data = useFetchData(query, optional);

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
                      <AsyncAutocomplete
                        query={field.query as DocumentNode}
                        optional={field.optional}
                        value={value}
                        placeholder={`Select ${field.label} ...`}
                        onChange={onChange}
                      />
                    );

                  // case "multiselect":
                  //   return (
                  //     <>
                  //       {multiselectOptions.map((item) => (
                  //         <MultipleSelector
                  //           key={item.key}
                  //           defaultOptions={item.data || OPTIONS}
                  //           value={value || []}
                  //           placeholder={`Select ${field.label} ...`}
                  //           onChange={(selectedOptions) => {
                  //             onChange(selectedOptions);
                  //           }}
                  //         />
                  //       ))}
                  //     </>
                  //   );

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
