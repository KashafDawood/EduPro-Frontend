import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input"; // shadcn UI
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/datepicker"; // Using DatePicker instead of Calendar
import { FORMS } from "./schema";

interface CommonFormProps {
  formName: keyof typeof FORMS;
  onSubmit: (data: any) => void;
}

export const CommonForm: React.FC<CommonFormProps> = ({
  formName,
  onSubmit,
}) => {
  const { control, handleSubmit } = useForm();
  const formSchema = FORMS[formName]();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {formSchema.map((field) => (
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
                        {field.options?.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  );
                case "date":
                  return (
                    <DatePicker
                      selected={value}
                      onSelect={onChange}
                      placeholder="Pick a date"
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
                  return (
                    <Input
                      type="text"
                      value={value}
                      onChange={onChange}
                      placeholder={field.label}
                    />
                  );
              }
            }}
          />
        </div>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
};
