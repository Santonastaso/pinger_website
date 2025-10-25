import { Link, useMatch } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { useSidebar } from "./ui/sidebar-hooks";
import { House, FolderOpen, Mail, Users } from "lucide-react";

export function AppSidebar() {
  const { openMobile, setOpenMobile } = useSidebar();
  const handleClick = () => {
    if (openMobile) {
      setOpenMobile(false);
    }
  };

  return (
        <Sidebar variant="floating" collapsible="icon" className="sticky top-0">
      <SidebarHeader>
        <div className="h-12" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={!!useMatch({ path: "/", end: true })}>
                  <Link to="/" onClick={handleClick}>
                    <House />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={!!useMatch({ path: "/projects", end: false })}>
                  <Link to="/projects" onClick={handleClick}>
                    <FolderOpen />
                    Progetti
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={!!useMatch({ path: "/contact", end: false })}>
                  <Link to="/contact" onClick={handleClick}>
                    <Mail />
                    Contatti
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={!!useMatch({ path: "/team", end: false })}>
                  <Link to="/team" onClick={handleClick}>
                    <Users />
                    Squadra
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
