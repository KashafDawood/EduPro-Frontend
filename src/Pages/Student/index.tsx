import { useQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import { GET_ALL_Student } from "@/APIs/StudentAPI/getAllStudent";
import { Skeleton } from "@/components/ui/skeleton";
import AlertError from "@/components/Alerts/errorAlert";

export default function Student() {
  const { data, loading, error } = useQuery(GET_ALL_Student);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <h1 className="text-xl font-bold">Student Page</h1>
      <div className="mt-4">
        {loading ? (
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        ) : (
          <MRTable name="StudentTable" data={data?.findAllStudent} />
        )}
      </div>
    </div>
  );
}
