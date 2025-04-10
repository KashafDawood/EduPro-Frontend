import { useLazyQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import AlertError from "@/components/Alerts/errorAlert";
import { useEffect, useState } from "react";
import { GET_ALL_CLASSES } from "@/APIs/ClassAPI/getAllClasses";
import { ClassForm } from "./Form/ClassFrom";

export default function Class() {
  const [classes, setClasses] = useState<JSON[] | null>(null);
  const [fetchClasses, { data, loading, error }] =
    useLazyQuery(GET_ALL_CLASSES);

  useEffect(() => {
    if (!classes || classes.length === 0) {
      fetchClasses();
    }
  }, [classes, fetchClasses]);

  useEffect(() => {
    if (data?.findAllClasses) {
      setClasses(data.findAllClasses);
    }
  }, [data, classes]);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Class Page</h1>
        <ClassForm />
      </div>
      <div className="mt-4">
        <MRTable name="ClassTable" data={classes || []} loading={loading} />
      </div>
    </div>
  );
}
