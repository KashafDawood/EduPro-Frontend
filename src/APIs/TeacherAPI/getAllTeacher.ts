import { gql } from "@apollo/client/core/core.cjs";

export const GET_ALL_TEACHER = gql`
  query FindAllTeachers {
    findAllTeachers {
      _id
      name
      phone
      guardianPhone
      active
      photo
      address
      guardianName
      guardianRelation
      CNIC
      guardianCNIC
      dateOfBirth
      dateOfJoining
      qualification
      salary
      subjectData {
        _id
        name
        marks
        totalMarks
        percentage
      }
      classData {
        _id
        name
        section
      }
    }
  }
`;
