import { NavLink, useLocation } from "react-router-dom";
import { Home, Users, BedDouble, CalendarCheck2, Wrench, CreditCard } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Students", url: "/students", icon: Users },
  { title: "Rooms", url: "/rooms", icon: BedDouble },
  { title: "Bookings", url: "/bookings", icon: CalendarCheck2 },
  { title: "Maintenance", url: "/maintenance", icon: Wrench },
  { title: "Payments", url: "/payments", icon: CreditCard },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar collapsible={state === "collapsed" ? "icon" : "offcanvas"}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Smart Hostel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={isActive(item.url)}>
                    <NavLink to={item.url} end>
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
