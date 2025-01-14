import { TableSchema } from "../types";

export const OtherStaffSchema: TableSchema = {
  styles: { maxHeight: "70vh", width: "93vw" },
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: 200,
    },
    {
      id: "phone",
      accessorKey: "phone",
      header: "Phone",
      size: 200,
    },
    {
      id: "guardianPhone",
      accessorKey: "guardianPhone",
      header: "Guardian Phone",
      size: 200,
    },
    {
      id: "photo",
      accessorKey: "photo",
      header: "Photo",
      size: 200,
    },
    {
      id: "address",
      accessorKey: "address",
      header: "Address",
      size: 200,
    },
    {
      id: "guardianName",
      accessorKey: "guardianName",
      header: "Guardian Name",
      size: 200,
    },
    {
      id: "guardianRelation",
      accessorKey: "guardianRelation",
      header: "Guardian Relation",
      size: 200,
    },
    {
      id: "CNIC",
      accessorKey: "CNIC",
      header: "CNIC",
      size: 200,
    },
    {
      id: "guardianCNIC",
      accessorKey: "guardianCNIC",
      header: "Guardian CNIC",
      size: 200,
    },
    {
      id: "dateOfBirth",
      accessorKey: "dateOfBirth",
      header: "Date of Birth",
      size: 200,
    },
    {
      id: "dateOfJoining",
      accessorKey: "dateOfJoining",
      header: "Date of Joining",
      size: 200,
    },
    {
      id: "qualification",
      accessorKey: "qualification",
      header: "Qualification",
      size: 200,
    },
    {
      id: "role",
      accessorKey: "role",
      header: "Role",
      size: 200,
    },
    {
      id: "salary",
      accessorKey: "salary",
      header: "Salary",
      size: 200,
    },
  ],
};
