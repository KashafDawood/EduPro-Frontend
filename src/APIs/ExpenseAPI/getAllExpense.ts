import { gql } from "@apollo/client/core/core.cjs";

export const GET_ALL_EXPENSE = gql`
  query FindAllExpenses {
    findAllExpenses {
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
