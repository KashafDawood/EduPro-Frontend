import { CommonForm } from "@/components/CommonForm";
import { useForm } from "react-hook-form";

export const OtherStaffForm = () => {
  const { control, watch, getValues, setValue, reset } = useForm();
  return (
    <CommonForm
      formName={"otherStaffForm"}
      buttonStyle={"!ml-[-100px]"}
      buttonText={"Add Employee"}
      control={control}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      handleSubmit={() => {}}
      formLabel={"Employee Form"}
    />
  );
};
