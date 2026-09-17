import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import MainHeader from "./components/MainHeader";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import Footer from "./components/Footer";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MainLayout() {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen flex flex-col text-slate-200 transition-colors duration-500"
      style={{
        backgroundColor: theme.bgColor,
        backgroundImage: `
          radial-gradient(circle at 15% 20%, ${theme.glow1} 0%, transparent 45%),
          radial-gradient(circle at 85% 60%, ${theme.glow2} 0%, transparent 45%),
          radial-gradient(circle at 50% 90%, ${theme.glow1} 0%, transparent 50%)
        `,
      }}
    >
      <ScrollToTop />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0F172A",
            color: "#F8FAFC",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.5)",
            fontSize: "14px",
            borderRadius: "12px",
          },
          success: {
            iconTheme: {
              primary: theme.primary,
              secondary: "#0F172A",
            },
          },
        }}
      />
      <MainHeader />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  );
}

export default App;
