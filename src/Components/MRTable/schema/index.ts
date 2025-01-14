import { ClassSchema } from "./class-schema";
import { StudentSchema } from "./student-schema";
import { TeacherSchema } from "./teacher-schema";

export const schema = {
  StudentTable: StudentSchema,
  TeacherTable: TeacherSchema,
  ClassTable: ClassSchema,
};
