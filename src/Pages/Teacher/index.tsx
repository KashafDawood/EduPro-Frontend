import { useQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import AlertError from "@/components/Alerts/errorAlert";
import { GET_ALL_TEACHER } from "@/APIs/TeacherAPI/getAllTeacher";

export default function Teacher() {
  const { data, loading, error } = useQuery(GET_ALL_TEACHER);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Teacher Page</h1>
      </div>
      <div className="mt-4">
        <MRTable
          name="TeacherTable"
          data={data?.findAllTeachers}
          loading={loading}
        />
      </div>
    </div>
  );
}
