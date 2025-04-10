import { useLazyQuery } from "@apollo/client/react/hooks";
import MRTable from "../../components/MRTable";
import AlertError from "@/components/Alerts/errorAlert";
import { useEffect, useState } from "react";
import { GET_ALL_OTHER_STAFF } from "@/APIs/OtherStaffAPI/getAllOtherStaff";
import { OtherStaffForm } from "./Form/OtherStaffFrom";

export default function OtherStaff() {
  const [otherStaff, setOtherStaff] = useState<JSON[] | null>(null);
  const [fetchOtherStaff, { data, loading, error }] =
    useLazyQuery(GET_ALL_OTHER_STAFF);

  useEffect(() => {
    if (!otherStaff || otherStaff.length === 0) {
      fetchOtherStaff();
    }
  }, [otherStaff, fetchOtherStaff]);

  useEffect(() => {
    if (data?.findAllStaffs) {
      setOtherStaff(data.findAllStaffs);
    }
  }, [data, otherStaff]);

  if (error) return <AlertError>{error.message}</AlertError>;

  return (
    <div className="min-h-screen p-6 w-full text-black">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">OtherStaff Page</h1>
        <OtherStaffForm />
      </div>
      <div className="mt-4">
        <MRTable
          name="OtherStaffTable"
          data={otherStaff || []}
          loading={loading}
        />
      </div>
    </div>
  );
}
