import { CommonForm } from "@/components/CommonForm";
import { useForm } from "react-hook-form";

export const ExpenseForm = () => {
  const { control, watch, getValues, setValue, reset } = useForm();
  return (
    <CommonForm
      formName={"expenseForm"}
      buttonStyle={"!ml-[-100px]"}
      buttonText={"Add Expense"}
      control={control}
      watch={watch}
      reset={reset}
      getValues={getValues}
      setValue={setValue}
      handleSubmit={() => {}}
      formLabel={"Expense Form"}
    />
  );
};
