import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_CLASS = gql`
  mutation CreateClass($name: String!, $section: String) {
    createClass(createClassInput: { name: $name, section: $section }) {
      _id
      name
      section
    }
  }
`;
