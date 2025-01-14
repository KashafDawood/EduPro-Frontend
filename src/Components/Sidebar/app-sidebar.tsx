import {
  Home,
  GraduationCap,
  ReceiptText,
  LibraryBig,
  Presentation,
  Users,
} from "lucide-react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Header } from "./header-sidebar";
import { Footer } from "./footer-sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const items = [
  {
    title: "Home",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Student",
    url: "/student",
    icon: GraduationCap,
  },
  {
    title: "Teacher",
    url: "/teacher",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Other Staff",
    url: "/otherstaff",
    icon: Users,
  },
  {
    title: "Class",
    url: "/class",
    icon: Presentation,
  },
  {
    title: "Subject",
    url: "/subject",
    icon: LibraryBig,
  },
  {
    title: "Expense",
    url: "/expense",
    icon: ReceiptText,
  },
];

export function AppSidebar() {
  return (
    <TooltipProvider>
      <Sidebar collapsible="icon">
        <Header />
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <SidebarMenuButton asChild>
                          <Link
                            to={item.url}
                            className="flex items-center space-x-2"
                          >
                            <item.icon className="h-5 w-5" />
                            <span>{item.title}</span>
                          </Link>
                        </SidebarMenuButton>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{item.title}</p>
                      </TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <Footer />
      </Sidebar>
    </TooltipProvider>
  );
}
