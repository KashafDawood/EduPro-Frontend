import { useLazyQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import AlertError from "@/components/Alerts/errorAlert";
import { useEffect, useState } from "react";
import { GET_ALL_EXPENSE } from "@/APIs/ExpenseAPI/getAllExpense";

export default function Expense() {
  const [expenses, setExpenses] = useState<JSON[] | null>(null);
  const [fetchExpenses, { data, loading, error }] =
    useLazyQuery(GET_ALL_EXPENSE);

  useEffect(() => {
    if (!expenses || expenses.length === 0) {
      fetchExpenses();
    }
  }, [expenses, fetchExpenses]);

  useEffect(() => {
    if (data?.findAllExpenses && (!expenses || expenses.length === 0)) {
      setExpenses(data.findAllExpenses);
    }
  }, [data, expenses]);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Expense Page</h1>
      </div>
      <div className="mt-4">
        <MRTable name="ExpenseTable" data={expenses || []} loading={loading} />
      </div>
    </div>
  );
}
