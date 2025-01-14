import { gql } from "@apollo/client/core/core.cjs";

export const GET_ALL_SUBJECT = gql`
  query FindAllSubject {
    findAllSubject {
      _id
      name
      marks
      totalMarks
      percentage
    }
  }
`;
