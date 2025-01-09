import { gql } from "@apollo/client/core/core.cjs";

export const LOGIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(signInInput: { email: $email, password: $password }) {
      accessToken
      refreshToken
    }
  }
`;
