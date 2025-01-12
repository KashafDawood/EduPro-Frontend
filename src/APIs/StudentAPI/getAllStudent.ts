import { gql } from "@apollo/client/core/core.cjs";

export const GET_ALL_Student = gql`
  query FindAllStudent {
    findAllStudent {
      _id
      studentName
      studentCNIC
      gender
      dateOfBirth
      dateOfAdmission
      address
      studentRollNumber
      religious
      numberOfSiblings
      admissionFee
      monthlyFee
      photo
      guardianName
      guardianRelation
      guardianPhone
      guardianCNIC
      guardianProfession
      guardianProfessionType
      guardianMonthlyIncome
      classData {
        _id
        name
        section
      }
      subjectData {
        _id
        name
        marks
        totalMarks
        percentage
      }
    }
  }
`;
