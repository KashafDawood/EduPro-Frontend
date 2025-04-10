import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_SUBJECT = gql`
  mutation CreateSubject(
    $name: String!
    $marks: Float
    $totalMarks: Float
    $percentage: Float
  ) {
    createSubject(
      createSubjectInput: {
        name: $name
        marks: $marks
        totalMarks: $totalMarks
        percentage: $percentage
      }
    ) {
      _id
      name
      marks
      totalMarks
      percentage
    }
  }
`;
