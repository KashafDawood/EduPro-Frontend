import { GET_ALL_CLASSES } from "@/APIs/ClassAPI/getAllClasses";
import { FormSchema } from "../types";
import { GET_ALL_SUBJECT } from "@/APIs/SubjectAPI/getAllSubject";

export const studentForm: FormSchema = () => [
  { name: "photo", type: "photo" },
  { name: "studentName", label: "Student Name", type: "text", required: true },
  { name: "studentCNIC", label: "Student CNIC", type: "cnic", required: true },
  {
    name: "gender",
    label: "Gender",
    type: "select",
    options: ["male", "female"],
    required: true,
  },
  { name: "dateOfBirth", label: "Date of Birth", type: "date", required: true },
  {
    name: "dateOfAdmission",
    label: "Date of Admission",
    type: "date",
    required: true,
  },
  { name: "address", label: "Address", type: "text", required: true },
  { name: "studentRollNumber", label: "Student Roll Number", type: "text" },
  { name: "religious", label: "Religious", type: "text" },
  { name: "numberOfSiblings", label: "Number of Siblings", type: "number" },
  { name: "admissionFee", label: "Admission Fee", type: "number" },
  { name: "monthlyFee", label: "Monthly Fee", type: "number" },
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
    name: "guardianPhone",
    label: "Guardian Phone",
    type: "text",
    required: true,
  },
  {
    name: "guardianCNIC",
    label: "Guardian CNIC",
    type: "cnic",
    required: true,
  },
  {
    name: "guardianProfession",
    label: "Guardian Profession",
    type: "text",
    required: true,
  },
  {
    name: "guardianProfessionType",
    label: "Guardian Profession Type",
    type: "select",
    options: ["gov", "private"],
    required: true,
  },
  {
    name: "guardianMonthlyIncome",
    label: "Guardian Monthly Income",
    type: "number",
  },
  {
    name: "Class",
    label: "Class",
    type: "autoComplete",
    query: GET_ALL_CLASSES,
    optional: "section",
  },
  {
    name: "Subject",
    label: "Subject",
    type: "multiselect",
    query: GET_ALL_SUBJECT,
  },
];
