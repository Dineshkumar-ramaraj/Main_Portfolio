import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-lg py-12 px-6 sm:px-14 lg:px-32 text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Link to="/" className="text-xl font-display font-bold tracking-tight text-white flex items-center gap-2">
            <span className="text-indigo-400 font-mono">&lt;</span>
            <span className="gradient-text">Dineshkumar</span>
            <span className="text-indigo-400 font-mono">/&gt;</span>
          </Link>
          <p className="text-sm text-slate-400 mt-1 max-w-sm">
            Passionate Full Stack Developer creating clean, intuitive, and modern web applications.
          </p>
        </div>

        {/* Center: Quick Links */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/skills" className="hover:text-cyan-400 transition-colors">Skills</Link>
          <Link to="/projects" className="hover:text-cyan-400 transition-colors">Projects</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>

        {/* Right: Social Icons & Back to top */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/DineshRamaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-600 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/dineshkumar-ramaraj-b1275a228/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>
          <Link
            to="/contact"
            className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/40 transition-all hover:scale-110"
            aria-label="Email"
          >
            <FaEnvelope size={18} />
          </Link>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all hover:scale-110"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <FaArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-slate-800/60 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between max-w-7xl mx-auto gap-2">
        <p>© {new Date().getFullYear()} Dineshkumar Ramaraj. All rights reserved.</p>
        <p className="flex items-center gap-1.5">
          Crafted with <FaHeart className="text-red-500 animate-pulse" size={12} /> using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
