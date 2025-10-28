import { useEffect } from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { Layout } from "./components/Layout";
import { AnimatedBackground } from "./components/ui/animated-background";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Team from "./pages/Team";

const App = () => {
  useEffect(() => {
    // Force dark theme by adding dark class to html and body
    document.documentElement.classList.add('dark');
    document.body.classList.add('dark');
  }, []);

  return (
    <SidebarProvider>
      {/* Global animated background covering entire app */}
      <div className="fixed inset-0 z-0">
        <AnimatedBackground variant="home" />
      </div>
      
      <AppSidebar />
      <Layout>
        <div className="relative z-10 w-full">
          <section id="home" className="min-h-screen relative">
            <Home />
          </section>
          
          <section id="projects" className="min-h-screen relative">
            <Projects />
          </section>
          
          <section id="team" className="min-h-screen relative">
            <Team />
          </section>
          
          <section id="contact" className="min-h-screen relative">
            <Contact />
          </section>
        </div>
      </Layout>
    </SidebarProvider>
  );
};

export default App;
