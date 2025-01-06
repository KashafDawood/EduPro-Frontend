import { Outlet, useNavigate } from "react-router";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";
import Sidebar from "../Components/Sidebar";

function PrivateLayout() {
  const navigate = useNavigate();
  const { isAuth } = useUserStore();

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default PrivateLayout;
