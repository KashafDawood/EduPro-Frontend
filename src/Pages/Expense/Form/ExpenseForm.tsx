import { CREATE_EXPENSE } from "@/APIs/ExpenseAPI/createExpense";
import AlertError from "@/components/Alerts/errorAlert";
import { CommonForm } from "@/components/CommonForm";
import { useMutation } from "@apollo/client/react/hooks";

export const ExpenseForm = () => {
  const [createExpense, { error }] = useMutation(CREATE_EXPENSE);

  const onSubmit = async (
    data: Record<string, string | number | Date | null>
  ): Promise<boolean> => {
    try {
      const result = await createExpense({
        variables: data,
        refetchQueries: ["FindAllExpenses"],
        awaitRefetchQueries: true,
      });
      return !!result.data;
    } catch {
      return false;
    }
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
