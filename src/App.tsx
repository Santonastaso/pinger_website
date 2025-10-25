import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <SidebarProvider>
        <AppSidebar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </Layout>
      </SidebarProvider>
    </Router>
  );
};

export default App;