import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_STUDENT = gql`
  mutation CreateStudent(
    $studentName: String!
    $studentCNIC: String!
    $gender: String!
    $dateOfBirth: DateTime!
    $address: String!
    $studentRollNumber: String
    $religious: String
    $guardianName: String!
    $guardianRelation: String!
    $guardianPhone: String!
    $guardianCNIC: String!
    $Subject: [ID!]!
    $Class: ID!
    $dateOfAdmission: DateTime!
    $numberOfSiblings: Float
    $admissionFee: Float
    $monthlyFee: Float
    $photo: String
    $guardianProfession: String
    $guardianProfessionType: String
    $guardianMonthlyIncome: Float
  ) {
    createStudent(
      createStudentInput: {
        studentName: $studentName
        studentCNIC: $studentCNIC
        gender: $gender
        dateOfBirth: $dateOfBirth
        address: $address
        studentRollNumber: $studentRollNumber
        religious: $religious
        guardianName: $guardianName
        guardianRelation: $guardianRelation
        guardianPhone: $guardianPhone
        guardianCNIC: $guardianCNIC
        Subject: $Subject
        Class: $Class
        dateOfAdmission: $dateOfAdmission
        numberOfSiblings: $numberOfSiblings
        admissionFee: $admissionFee
        monthlyFee: $monthlyFee
        photo: $photo
        guardianProfession: $guardianProfession
        guardianProfessionType: $guardianProfessionType
        guardianMonthlyIncome: $guardianMonthlyIncome
      }
    ) {
      _id
      studentName
      studentCNIC
      gender
      Class
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
      Subject
    }
  }
`;
