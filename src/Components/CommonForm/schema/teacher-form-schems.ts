import { FormFieldSchema, FormSchema } from "../types";

export const teacherForm: FormSchema = (): FormFieldSchema[] => {
  return [
    {
      name: "name",
      label: "Name",
    },
    {
      name: "phone",
      label: "Phone",
      type: "number",
    },
    {
      name: "guardianPhone",
      label: "Guardian Phone",
      type: "number",
    },
    {
      name: "photo",
      label: "Photo",
    },
    {
      name: "address",
      label: "Address",
    },
    {
      name: "guardianName",
      label: "Guardian Name",
    },
    {
      name: "guardianRelation",
      label: "Guardian Relation",
    },
    {
      name: "CNIC",
      label: "CNIC",
      type: "number",
    },
    {
      name: "guardianCNIC",
      label: "Guardian CNIC",
      type: "number",
    },
    {
      name: "Classes",
      label: "Classes",
    },
    {
      name: "Subjects",
      label: "Subjects",
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
    },
    {
      name: "qualification",
      label: "Qualification",
    },
    {
      name: "salary",
      label: "Salary",
      type: "number",
    },
  ];
};
