import { gql } from "@apollo/client/core/core.cjs";

export const LOGOUT_MUTATION = gql`
  mutation logout {
    logout
  }
`;
