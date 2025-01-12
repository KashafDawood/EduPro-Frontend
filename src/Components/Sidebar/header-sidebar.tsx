import { BookOpen } from "lucide-react";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Link } from "react-router";

export function Header() {
  return (
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link to="/dashboard">
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-300">
                <BookOpen size={18} />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="text-2xl font-bold">EduPro</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
  );
}
