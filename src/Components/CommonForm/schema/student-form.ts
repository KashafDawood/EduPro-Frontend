import { GET_ALL_CLASSES } from "@/APIs/ClassAPI/getAllClasses";
import { FormSchema } from "../types";

export const StudentForm: FormSchema = () => [
  { name: "fetch", type: "fetch", query: GET_ALL_CLASSES },
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
    type: "autoComplete",
  },
  { name: "guardianPhone", label: "Guardian Phone", type: "text" },
];
