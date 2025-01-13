import { useLazyQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import { GET_ALL_Student } from "@/APIs/StudentAPI/getAllStudent";
import AlertError from "@/components/Alerts/errorAlert";
import { StudentForm } from "./Form/StudentForm";
import { useEffect, useState } from "react";

export default function Student() {
  const [students, setStudents] = useState<JSON[] | null>(null);
  const [fetchStudents, { data, loading, error }] =
    useLazyQuery(GET_ALL_Student);

  useEffect(() => {
    if (!students || students.length === 0) {
      fetchStudents();
    }
  }, [students, fetchStudents]);

  useEffect(() => {
    if (data?.findAllStudent && (!students || students.length === 0)) {
      setStudents(data.findAllStudent);
    }
  }, [data, students]);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Student Page</h1>
        <StudentForm />
      </div>
      <div className="mt-4">
        <MRTable name="StudentTable" data={students || []} loading={loading} />
      </div>
    </div>
  );
}
