import { CommonForm } from "@/components/CommonForm";

export const ExpenseForm = () => {
  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    console.log("expenseform", data);
  };

  return (
    <CommonForm
      formName="expenseForm"
      formTitle="Expense Form"
      buttonLabel="Add Expense"
      onSubmit={onSubmit}
    />
  );
};
