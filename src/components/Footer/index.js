import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaMapMarkerAlt
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import ENV from "../../config/env";

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pageLinks = [
    { label: "Home Overview", path: "/" },
    { label: "About & Certifications", path: "/about" },
    { label: "Technical Skills & Stack", path: "/skills" },
    { label: "Featured Projects", path: "/projects" },
    { label: "Contact & Inquiry", path: "/contact" },
  ];

  const specializationLinks = [
    { label: "Generative AI & RAG", path: "/projects" },
    { label: "Machine Learning & NLP", path: "/projects" },
    { label: "Full Stack Web Apps", path: "/projects" },
    { label: "Data Science & Python", path: "/skills" },
  ];

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/90 backdrop-blur-xl text-slate-400 pt-16 pb-12 px-6 sm:px-12 lg:px-20 overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full blur-3xl pointer-events-none opacity-20"
        style={{ backgroundColor: theme.primary }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">

        {/* Column 1: Brand, Tagline & Availability */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <Link to="/" className="text-2xl font-display font-bold tracking-tight text-white flex items-center gap-2">
            <span className="font-mono text-xl" style={{ color: theme.secondary }}>&lt;</span>
            <span className="gradient-text font-extrabold">Dineshkumar</span>
            <span className="font-mono text-xl" style={{ color: theme.primary }}>/&gt;</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
            AI/ML Engineer & Full Stack Web Developer (MCA). Specializing in Generative AI, RAG pipelines, and interactive web applications.
          </p>

          <div className="flex flex-col gap-2 pt-2 text-xs">
            {/* <div className="inline-flex items-center gap-2 text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Time & Freelance</span>
            </div> */}
            <div className="flex items-center gap-1.5 text-slate-400">
              <FaMapMarkerAlt size={12} className="text-rose-400" />
              <span>India</span>
              <span className="text-sm leading-none" role="img" aria-label="India Flag">🇮🇳</span>
            </div>
          </div>
        </div>

        {/* Column 2: Navigation / Detailed Pages */}
        <div className="lg:col-span-3 flex flex-col space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            {pageLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">›</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Specializations & Focus Areas */}
        <div className="lg:col-span-2 flex flex-col space-y-3">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">
            Focus Areas
          </h4>
          <ul className="space-y-2 text-sm">
            {specializationLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className="text-slate-400 hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                >
                  <span className="text-slate-400 group-hover:text-cyan-400 transition-colors">›</span>
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Connect & Direct Reach */}
        <div className="lg:col-span-3 flex flex-col space-y-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-200 font-mono">
            Get In Touch
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Interested in collaboration, freelancing, or hiring? Drop a line anytime.
          </p>

          {(ENV.EMAIL || ENV.PHONE) && (
            <div className="space-y-1.5 pt-1">
              {ENV.EMAIL && (
                <a
                  href={`mailto:${ENV.EMAIL}`}
                  className="block text-xs font-mono text-cyan-400 hover:underline break-all"
                >
                  {ENV.EMAIL}
                </a>
              )}
              {ENV.PHONE && (
                <a
                  href={`tel:${ENV.PHONE.replace(/\s+/g, "")}`}
                  className="block text-xs font-mono text-slate-300 hover:text-white transition-colors"
                >
                  {ENV.PHONE}
                </a>
              )}
            </div>
          )}

          <div className="flex items-center gap-2.5 pt-1">
            {ENV.GITHUB_URL && (
              <a
                href={ENV.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800/80 transition-all hover:scale-105"
                aria-label="GitHub Profile"
              >
                <FaGithub size={16} />
              </a>
            )}
            {ENV.LINKEDIN_URL && (
              <a
                href={ENV.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-slate-800/80 transition-all hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={16} />
              </a>
            )}
            <Link
              to="/contact"
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r ${theme.buttonGradient} hover:opacity-90 shadow-md transition-all hover:scale-105`}
            >
              <span>Let's Talk</span>
              <FiSend size={12} />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar: Copyright & Back to Top */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Dineshkumar Ramaraj. Built with React & Tailwind CSS.</p>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1 text-slate-400">
            Crafted with <FaHeart className="text-red-500" size={12} />
          </span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
            aria-label="Back to Top"
          >
            <span>Top</span>
            <FaArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
