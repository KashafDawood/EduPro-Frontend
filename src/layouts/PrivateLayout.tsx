import { Outlet, useNavigate } from "react-router";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

function PrivateLayout() {
  const navigate = useNavigate();
  const { isAuth } = useUserStore();

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);
  return (
    <div className="flex">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <Outlet />
      </SidebarProvider>
    </div>
  );
}

export default PrivateLayout;
