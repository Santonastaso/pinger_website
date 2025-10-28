import { useState, useEffect } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  const handleClick = () => {
    if (openMobile) {
      setOpenMobile(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <Sidebar variant="floating" collapsible="icon" className="sticky top-0 z-40">
      <SidebarHeader>
        <div className="h-12" />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "home"}
                  onClick={() => {
                    scrollToSection("home");
                    handleClick();
                  }}
                >
                  <House />
                  Home
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "projects"}
                  onClick={() => {
                    scrollToSection("projects");
                    handleClick();
                  }}
                >
                  <FolderOpen />
                  Progetti
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "team"}
                  onClick={() => {
                    scrollToSection("team");
                    handleClick();
                  }}
                >
                  <Users />
                  Squadra
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={activeSection === "contact"}
                  onClick={() => {
                    scrollToSection("contact");
                    handleClick();
                  }}
                >
                  <Mail />
                  Contatti
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
