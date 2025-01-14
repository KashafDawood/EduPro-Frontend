import { CommonForm } from "@/components/CommonForm";
import { useForm } from "react-hook-form";

export const TeacherForm = () => {
  const { control, watch, getValues, setValue, reset } = useForm();
  return (
    <CommonForm
      formName={"teacherForm"}
      buttonStyle={"!ml-[-100px]"}
      buttonText={"Add Teacher"}
      control={control}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      handleSubmit={() => {}}
      formLabel={"Teacher Form"}
    />
  );
};
