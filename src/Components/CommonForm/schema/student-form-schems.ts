import { FormFieldSchema, FormSchema } from "../types1";

export const studentForm: FormSchema = (): FormFieldSchema[] => {
  return [
    {
      name: "studentName",
      label: "Student Name",
    },
    {
      name: "studentCNIC",
      label: "Student CNIC",
    },
    {
      name: "gender",
      label: "Gender",
    },
    {
      name: "dateOfBirth",
      label: "Date of Birth",
      type: "date",
    },
    {
      name: "dateOfAdmission",
      label: "Date of Admission",
      type: "date",
    },
    {
      name: "address",
      label: "Address",
    },
    {
      name: "studentRollNumber",
      label: "Student Roll Number",
    },
    {
      name: "religious",
      label: "Religious",
    },
    {
      name: "numberOfSiblings",
      label: "Number of Siblings",
      type: "number",
    },
    {
      name: "admissionFee",
      label: "Admission Fee",
      type: "number",
    },
    {
      name: "monthlyFee",
      label: "Monthly Fee",
      type: "number",
    },
    {
      name: "photo",
      label: "Photo",
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
      name: "guardianPhone",
      label: "Guardian Phone",
      type: "number",
    },
    {
      name: "guardianCNIC",
      label: "Guardian CNIC",
      type: "number",
    },
    {
      name: "guardianProfession",
      label: "Guardian Profession",
    },
    {
      name: "guardianProfessionType",
      label: "Guardian Profession Type",
    },
    {
      name: "guardianMonthlyIncome",
      label: "Guardian Monthly Income",
      type: "number",
    },
  ];
};
