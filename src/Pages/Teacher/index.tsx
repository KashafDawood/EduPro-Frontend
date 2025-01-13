import { useLazyQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import AlertError from "@/components/Alerts/errorAlert";
import { GET_ALL_TEACHER } from "@/APIs/TeacherAPI/getAllTeacher";
import { useEffect, useState } from "react";

export default function Teacher() {
  const [teachers, setTeachers] = useState<JSON[] | null>(null);
  const [fetchTeachers, { data, loading, error }] =
    useLazyQuery(GET_ALL_TEACHER);

  useEffect(() => {
    if (!teachers || teachers.length === 0) {
      fetchTeachers();
    }
  }, [teachers, fetchTeachers]);

  useEffect(() => {
    if (data?.findAllTeachers && (!teachers || teachers.length === 0)) {
      setTeachers(data.findAllTeachers);
    }
  }, [data, teachers]);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Teacher Page</h1>
      </div>
      <div className="mt-4">
        <MRTable name="TeacherTable" data={teachers || []} loading={loading} />
      </div>
    </div>
  );
}
