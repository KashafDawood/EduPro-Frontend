import { gql } from "@apollo/client/core/core.cjs";

export const GET_ME = gql`
  mutation Me($accessToken: String!) {
    me(accessToken: $accessToken) {
      _id
      name
      email
    }
  }
`;
