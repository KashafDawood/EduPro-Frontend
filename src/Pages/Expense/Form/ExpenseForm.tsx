import { CREATE_EXPENSE } from "@/APIs/ExpenseAPI/createExpense";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const ExpenseForm = () => {
  const [createExpense, { error }] = useMutation<{ message: string }>(
    CREATE_EXPENSE
  );

  const onSubmit = (data: Record<string, string | number | Date | null>) => {
    // createExpense({ variables: data });
  };

  return (
    <>
      {error && <AlertError>{error?.message}</AlertError>}
      <CommonForm
        formName="expenseForm"
        formTitle="Expense Form"
        buttonLabel="Add Expense"
        onSubmit={onSubmit}
      />
    </>
  );
};
