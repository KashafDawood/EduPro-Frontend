import { useLazyQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import AlertError from "@/components/Alerts/errorAlert";
import { useEffect, useState } from "react";
import { GET_ALL_SUBJECT } from "@/APIs/SubjectAPI/getAllSubject";

export default function Subject() {
  const [subjects, setSubjects] = useState<JSON[] | null>(null);
  const [fetchSubjects, { data, loading, error }] =
    useLazyQuery(GET_ALL_SUBJECT);

  useEffect(() => {
    if (!subjects || subjects.length === 0) {
      fetchSubjects();
    }
  }, [subjects, fetchSubjects]);

  useEffect(() => {
    if (data?.findAllSubject && (!subjects || subjects.length === 0)) {
      setSubjects(data.findAllSubject);
    }
  }, [data, subjects]);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Subject Page</h1>
      </div>
      <div className="mt-4">
        <MRTable name="SubjectTable" data={subjects || []} loading={loading} />
      </div>
    </div>
  );
}
