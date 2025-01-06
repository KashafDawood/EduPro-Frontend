import MRTable from "../../Components/MRTable";

function AdminDashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6 margin-left-16 w-full text-black">
        <p className="h-4">AdminDashboard</p>
        <div className="mt-4">
          <MRTable name="TestTable" data={[]} />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
