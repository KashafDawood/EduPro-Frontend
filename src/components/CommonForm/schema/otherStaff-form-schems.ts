import { FormSchema } from "../types";

export const otherStaffForm: FormSchema = () => {
  return [
    {
      name: "photo",
      type: "photo",
    },
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      label: "Phone",
      type: "text",
      required: true,
    },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["male", "female"],
      required: true,
    },
    {
      name: "guardianPhone",
      label: "Guardian Phone",
      type: "text",
      required: true,
    },
    {
      name: "address",
      label: "Address",
      type: "text",
      required: true,
    },
    {
      name: "guardianName",
      label: "Guardian Name",
      type: "text",
      required: true,
    },
    {
      name: "guardianRelation",
      label: "Guardian Relation",
      type: "text",
      required: true,
    },
    {
      name: "CNIC",
      label: "CNIC",
      type: "cnic",
      required: true,
    },
    {
      name: "guardianCNIC",
      label: "Guardian CNIC",
      type: "cnic",
      required: true,
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
    },
    {
      name: "dateOfJoining",
      label: "Date of Joining",
      type: "date",
      required: true,
    },
    {
      name: "qualification",
      label: "Qualification",
      type: "text",
    },
    {
      name: "role",
      label: "Role",
      type: "text",
      required: true,
    },
    {
      name: "salary",
      label: "Salary",
      type: "number",
    },
  ];
};
