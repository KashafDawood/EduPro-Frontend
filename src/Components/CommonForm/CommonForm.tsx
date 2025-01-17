import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { FORMS } from "./schema";
import { Slideout } from "./Slideout";
import { format } from "date-fns";

interface CommonFormProps {
  formName: keyof typeof FORMS;
}

export const CommonForm: React.FC<CommonFormProps> = ({ formName }) => {
  const { control, handleSubmit } = useForm();
  const formSchema = FORMS[formName]();

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
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !value && "text-muted-foreground"
                            )}
                          >
                            {value ? format(value, "PPP") : field.label}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={value}
                            onSelect={onChange}
                          />
                        </PopoverContent>
                      </Popover>
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
      </form>
    </Slideout>
  );
};
