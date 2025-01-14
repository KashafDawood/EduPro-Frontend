import { CommonForm } from "@/components/CommonForm";
import { useForm } from "react-hook-form";

export const ClassForm = () => {
  const { control, watch, getValues, setValue, reset } = useForm();
  return (
    <CommonForm
      formName={"classForm"}
      buttonStyle={"!ml-[-100px]"}
      buttonText={"Add Class"}
      control={control}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      handleSubmit={() => {}}
      formLabel={"Class Form"}
    />
  );
};
