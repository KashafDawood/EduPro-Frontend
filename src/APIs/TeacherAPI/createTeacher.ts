import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_TEACHER = gql`
  mutation CreateTeacher(
    $name: String!
    $CNIC: String!
    $photo: String
    $phone: String!
    $gender: String!
    $address: String!
    $guardianName: String!
    $guardianRelation: String!
    $guardianPhone: String!
    $guardianCNIC: String!
    $qualification: String!
    $dateOfBirth: DateTime
    $dateOfJoining: DateTime!
    $salary: Float
    $Class: [ID!]!
    $Subject: [ID!]!
  ) {
    createTeacher(
      createTeacherInput: {
        name: $name
        CNIC: $CNIC
        photo: $photo
        phone: $phone
        gender: $gender
        address: $address
        guardianName: $guardianName
        guardianRelation: $guardianRelation
        guardianPhone: $guardianPhone
        guardianCNIC: $guardianCNIC
        qualification: $qualification
        salary: $salary
        dateOfBirth: $dateOfBirth
        dateOfJoining: $dateOfJoining
        Class: $Class
        Subject: $Subject
      }
    ) {
      _id
      name
      photo
      phone
      address
      guardianName
      CNIC
      guardianCNIC
      dateOfBirth
      dateOfJoining
      qualification
      salary
      guardianPhone
      guardianRelation
      Class
      Subject
    }
  }
`;
