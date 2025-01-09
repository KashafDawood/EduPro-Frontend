// import MRTable from "../../components/MRTable";

import { useUserStore } from "@/store/userStore";

function AdminDashboard() {
  const { _id, name, email } = useUserStore();
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 margin-left-16 w-full text-black">
        Dashboard
        {`
        ${_id}
        ${name}
        ${email}
        `}
        {/* <p className="h-4">AdminDashboard</p>
        <div className="mt-4">
          <MRTable name="TestTable" data={[]} />
        </div> */}
      </div>
    </>
  );
}

export default AdminDashboard;
