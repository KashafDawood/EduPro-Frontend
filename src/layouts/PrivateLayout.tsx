import { Outlet, useNavigate } from "react-router";
import { useUserStore } from "../store/userStore";
import { useEffect } from "react";
import { AppSidebar } from "@/components/Sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

function PrivateLayout() {
  const defaultOpen = localStorage.getItem("sidebar:state") === "true";
  const navigate = useNavigate();
  const { isAuth } = useUserStore();

  useEffect(() => {
    if (!isAuth) navigate("/");
  }, [isAuth, navigate]);

  useEffect(() => {
    localStorage.setItem("sidebar:state", defaultOpen.toString());
  }, [defaultOpen]);

  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <SidebarTrigger />
        <SidebarInset className="flex-1 overflow-auto">
          <Outlet />
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default PrivateLayout;
