import { gql } from "@apollo/client/core/core.cjs";

export const REFRESH_TOKEN = gql`
  mutation RefreshAccessToken($_id: String!) {
    refreshAccessToken(id: $_id) {
      accessToken
    }
  }
`;
