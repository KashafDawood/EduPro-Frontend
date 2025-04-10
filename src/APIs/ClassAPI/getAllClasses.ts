import { gql } from "@apollo/client/core/core.cjs";

export const GET_ALL_CLASSES = gql`
  query FindAllClasses {
    findAllClasses {
      _id
      name
      section
    }
  }
`;
