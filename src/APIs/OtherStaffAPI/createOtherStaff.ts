import { gql } from "@apollo/client/core/core.cjs";

export const CREATE_OTHER_STAFF = gql`
  mutation CreateStaff(
    $name: String!
    $CNIC: String!
    $photo: String!
    $phone: String!
    $gender: String!
    $address: String!
    $guardianName: String!
    $guardianRelation: String!
    $guardianPhone: String!
    $guardianCNIC: String!
    $qualification: String!
    $dateOfBirth: DateTime!
    $dateOfJoining: DateTime!
    $role: String!
    $salary: Float!
  ) {
    createStaff(
      createStaffInput: {
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
        role: $role
        dateOfBirth: $dateOfBirth
        dateOfJoining: $dateOfJoining
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
    }
  }
`;
