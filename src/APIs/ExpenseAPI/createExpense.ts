import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_EXPENSE = gql`
  mutation CreateExpense(
    $month: Int!
    $year: Int!
    $buildingExpense: Int!
    $bills: Int!
    $miscellaneousExpense: Int!
  ) {
    createExpense(
      createExpenseInput: {
        month: $month
        year: $year
        buildingExpense: $buildingExpense
        bills: $bills
        miscellaneousExpense: $miscellaneousExpense
      }
    ) {
      _id
      month
      year
      salaries
      buildingExpense
      bills
      miscellaneousExpense
      createdAt
    }
  }
`;
