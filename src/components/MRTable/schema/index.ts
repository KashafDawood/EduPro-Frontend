import { ClassSchema } from "./class-schema";
import { ExpenseSchema } from "./expense-schema";
import { OtherStaffSchema } from "./otherStaff-schema";
import { StudentSchema } from "./student-schema";
import { SubjectSchema } from "./subject-schema";
import { TeacherSchema } from "./teacher-schema";

export const schema = {
  StudentTable: StudentSchema,
  TeacherTable: TeacherSchema,
  ClassTable: ClassSchema,
  OtherStaffTable: OtherStaffSchema,
  SubjectTable: SubjectSchema,
  ExpenseTable: ExpenseSchema,
};
