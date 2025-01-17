import { FormSchema } from "../types";

export const StudentForm: FormSchema = () => [
  { name: "studentName", label: "Student Name", type: "text", required: true },
  { name: "studentCNIC", label: "Student CNIC", type: "text" },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["Male", "Female"],
  },
  { name: "dateOfBirth", label: "Date of Birth", type: "date" },
  {
    name: "class",
    label: "Class",
    type: "select",
    options: ["Class 1", "Class 2", "Class 3"],
  },
  { name: "guardianPhone", label: "Guardian Phone", type: "number" },
];
