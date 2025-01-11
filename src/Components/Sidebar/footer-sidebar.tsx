import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useUserStore } from "@/store/userStore";
import { User2, ChevronUp } from "lucide-react";
import { LOGOUT_MUTATION } from "@/APIs/UserAPI/logout";
import { useNavigate } from "react-router";
import { useMutation } from "@apollo/client/react/hooks";

export function Footer() {
  const { name, clearUser } = useUserStore();
  const navigate = useNavigate();
  const [logout] = useMutation(LOGOUT_MUTATION);

  const handleLogout = async () => {
    await logout();
    clearUser();
    navigate("/");
  };

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <SidebarMenuButton>
                <User2 /> {name}
                <ChevronUp className="ml-auto" />
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="top"
              className="w-[--radix-popper-anchor-width]"
            >
              <DropdownMenuItem
                onClick={handleLogout}
                className="cursor-pointer"
              >
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
}
