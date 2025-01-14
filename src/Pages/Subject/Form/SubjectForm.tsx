import { CommonForm } from "@/components/CommonForm";
import { useForm } from "react-hook-form";

export const SubjectForm = () => {
  const { control, watch, getValues, setValue, reset } = useForm();
  return (
    <CommonForm
      formName={"subjectForm"}
      buttonStyle={"!ml-[-100px]"}
      buttonText={"Add Subject"}
      control={control}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      handleSubmit={() => {}}
      formLabel={"Subject Form"}
    />
  );
};
