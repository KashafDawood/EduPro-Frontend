import { GET_ALL_CLASSES } from "@/APIs/ClassAPI/getAllClasses";
import { FormSchema } from "../types";
import { GET_ALL_SUBJECT } from "@/APIs/SubjectAPI/getAllSubject";

export const studentForm: FormSchema = () => [
  { name: "studentName", label: "Student Name", type: "text", required: true },
  { name: "studentCNIC", label: "Student CNIC", type: "text", required: true },
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
  { name: "religious", label: "Religious", type: "text", required: true },
  { name: "numberOfSiblings", label: "Number of Siblings", type: "number" },
  { name: "admissionFee", label: "Admission Fee", type: "number" },
  { name: "monthlyFee", label: "Monthly Fee", type: "number" },
  { name: "photo", label: "Photo", type: "text" },
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
    type: "number",
    required: true,
  },
  {
    name: "guardianCNIC",
    label: "Guardian CNIC",
    type: "number",
    required: true,
  },
  { name: "guardianProfession", label: "Guardian Profession", type: "text" },
  {
    name: "guardianProfessionType",
    label: "Guardian Profession Type",
    type: "text",
  },
  {
    name: "guardianMonthlyIncome",
    label: "Guardian Monthly Income",
    type: "number",
  },
  {
    name: "class",
    label: "Class",
    type: "autoComplete",
    query: GET_ALL_CLASSES,
    optional: "section",
    required: true,
  },
  {
    name: "subject",
    label: "Subject",
    type: "multiselect",
    query: GET_ALL_SUBJECT,
    required: true,
  },
];
