import { useEffect } from "react";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { Layout } from "./components/Layout";
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
      <AppSidebar />
      <Layout>
        <div className="w-full">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="team" className="min-h-screen">
            <Team />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </div>
      </Layout>
    </SidebarProvider>
  );
};

export default App;