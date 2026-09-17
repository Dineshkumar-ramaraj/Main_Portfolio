import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { NavLink, Link } from "react-router-dom";
import { FiSend } from "react-icons/fi";
import ThemeSelector from "../ThemeSelector";
import { useTheme } from "../../context/ThemeContext";

const Header = ({ showSidebar, setShowSidebar }) => {
  const { theme } = useTheme();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/75 border-b border-slate-800/70 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-20 px-6 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-xl font-display font-bold tracking-tight text-white"
        >
          <span
            className="font-mono text-xl transition-transform group-hover:-translate-x-1 duration-200"
            style={{ color: theme.secondary }}
          >
            &lt;
          </span>
          <span className="font-extrabold text-2xl tracking-wide gradient-text">
            Dineshkumar
          </span>
          <span
            className="font-mono text-xl transition-transform group-hover:translate-x-1 duration-200"
            style={{ color: theme.primary }}
          >
            /&gt;
          </span>
          {/* <span className={`hidden sm:inline-flex items-center gap-1.5 ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${theme.badgeBg}`}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: theme.primary }}></span>
            Available
          </span> */}
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-slate-900/80 border border-slate-800/90 shadow-inner">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                  ? `bg-gradient-to-r ${theme.buttonGradient} text-white shadow-md shadow-slate-950/50`
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA, Theme Selector & Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <ThemeSelector />

          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r ${theme.buttonGradient} hover:opacity-95 shadow-md transition-all hover:scale-[1.03] active:scale-[0.98]`}
          >
            <span>Let's Talk</span>
            <FiSend size={14} />
          </Link>

          {/* Mobile Hamburger Menu Button */}
          <button
            type="button"
            className="md:hidden p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-slate-700 transition-all focus:outline-none"
            onClick={() => setShowSidebar(!showSidebar)}
            aria-label="Toggle navigation menu"
          >
            <HiMenuAlt3 size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
