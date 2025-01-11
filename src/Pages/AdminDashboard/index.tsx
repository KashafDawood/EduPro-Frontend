import { CommonForm } from "@/components/CommonForm";
import MRTable from "../../components/MRTable";

function AdminDashboard() {
  return (
    <>
      <div className="min-h-screen p-6 margin-left-16 w-full text-black">
        Dashboard
        <div className="mt-4">
          <MRTable name="TestTable" data={[]} />
        </div>
        <CommonForm
          formName={"studentForm"}
          buttonStyle={"!ml-[-100px]"}
          buttonText={"Add Student"}
        />
      </div>
    </>
  );
}

export default AdminDashboard;
