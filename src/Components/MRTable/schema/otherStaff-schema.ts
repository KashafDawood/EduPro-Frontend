import { TableSchema } from "../types";
import { defaultStyles, defaultSize } from "./schema-helpers";

export const OtherStaffSchema: TableSchema = {
  styles: defaultStyles,
  TableSchema: [
    {
      id: "name",
      accessorKey: "name",
      header: "Name",
      size: defaultSize,
    },
    {
      id: "phone",
      accessorKey: "phone",
      header: "Phone",
      size: defaultSize,
    },
    {
      id: "guardianPhone",
      accessorKey: "guardianPhone",
      header: "Guardian Phone",
      size: defaultSize,
    },
    {
      id: "photo",
      accessorKey: "photo",
      header: "Photo",
      size: defaultSize,
    },
    {
      id: "address",
      accessorKey: "address",
      header: "Address",
      size: defaultSize,
    },
    {
      id: "guardianName",
      accessorKey: "guardianName",
      header: "Guardian Name",
      size: defaultSize,
    },
    {
      id: "guardianRelation",
      accessorKey: "guardianRelation",
      header: "Guardian Relation",
      size: defaultSize,
    },
    {
      id: "CNIC",
      accessorKey: "CNIC",
      header: "CNIC",
      size: defaultSize,
    },
    {
      id: "guardianCNIC",
      accessorKey: "guardianCNIC",
      header: "Guardian CNIC",
      size: defaultSize,
    },
    {
      id: "dateOfBirth",
      accessorKey: "dateOfBirth",
      header: "Date of Birth",
      size: defaultSize,
    },
    {
      id: "dateOfJoining",
      accessorKey: "dateOfJoining",
      header: "Date of Joining",
      size: defaultSize,
    },
    {
      id: "qualification",
      accessorKey: "qualification",
      header: "Qualification",
      size: defaultSize,
    },
    {
      id: "role",
      accessorKey: "role",
      header: "Role",
      size: defaultSize,
    },
    {
      id: "salary",
      accessorKey: "salary",
      header: "Salary",
      size: defaultSize,
    },
  ],
};
