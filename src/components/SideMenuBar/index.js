import React from "react";
import { IoClose } from "react-icons/io5";
import { NavLink, Link } from "react-router-dom";
import { FaHome, FaUser, FaLaptopCode, FaFolderOpen, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SideMenubar = ({ showSidebar, setShowSidebar }) => {
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome size={18} /> },
    { name: "About", path: "/about", icon: <FaUser size={18} /> },
    { name: "Skills", path: "/skills", icon: <FaLaptopCode size={18} /> },
    { name: "Projects", path: "/projects", icon: <FaFolderOpen size={18} /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope size={18} /> },
  ];

  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeSidebar}
        className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          showSidebar ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 w-72 max-w-[85vw] h-full bg-slate-950/95 backdrop-blur-2xl border-l border-slate-800/80 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
          showSidebar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div>
          {/* Header & Close button */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-800/70">
            <Link to="/" onClick={closeSidebar} className="flex items-center gap-1.5 font-display font-bold text-lg">
              <span className="text-cyan-400 font-mono">&lt;</span>
              <span className="gradient-text font-bold">Dinesh</span>
              <span className="text-indigo-400 font-mono">/&gt;</span>
            </Link>

            <button
              onClick={closeSidebar}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
              aria-label="Close menu"
            >
              <IoClose size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="mt-6 flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-900"
                  }`
                }
              >
                <span className="text-cyan-400">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Bottom Social Links & Status */}
        <div className="pt-6 border-t border-slate-800/70">
          <div className="flex items-center gap-2 mb-4 px-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs text-slate-400 font-medium">Available for new opportunities</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/DineshRamaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/dineshkumar-ramaraj-b1275a228/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2.5 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <Link
              to="/contact"
              onClick={closeSidebar}
              className="flex-1 py-2.5 flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 text-white shadow-md shadow-indigo-500/20 hover:opacity-90 transition-opacity"
              aria-label="Contact"
            >
              <FaEnvelope size={16} />
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideMenubar;
