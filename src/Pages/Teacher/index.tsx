// import { useQuery } from "@apollo/client/react/hooks";
// import MRTable from "../../components/MRTable";
// import { GET_ALL_Student } from "@/APIs/StudentAPI/getAllStudent";
// import AlertError from "@/components/Alerts/errorAlert";

export default function Teacher() {
  //   const { data, loading, error } = useQuery(GET_ALL_Student);

  //   if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Teacher Page</h1>
      </div>
      <div className="mt-4">
        {/* <MRTable
          name="StudentTable"
          data={data?.findAllStudent}
          loading={loading}
        /> */}
      </div>
    </div>
  );
}
