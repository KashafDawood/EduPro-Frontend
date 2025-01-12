import { CommonForm } from "@/components/CommonForm";
import { useForm } from "react-hook-form";

export const StudentForm = () => {
  const { control, watch, getValues, setValue, reset } = useForm();
  return (
    <CommonForm
      formName={"studentForm"}
      buttonStyle={"!ml-[-100px]"}
      buttonText={"Add Student"}
      control={control}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      handleSubmit={() => {}}
      formLabel={"Student Form"}
    />
  );
};
