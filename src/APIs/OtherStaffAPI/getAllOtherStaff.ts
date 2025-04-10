import { gql } from "@apollo/client/core/core.cjs";

export const GET_ALL_OTHER_STAFF = gql`
  query FindAllStaffs {
    findAllStaffs {
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
      role
    }
  }
`;
