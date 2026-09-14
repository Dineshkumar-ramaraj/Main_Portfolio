import React, { useEffect } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowRight, FaGraduationCap, FaReact, FaNodeJs } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import myProfileImage from "../../assets/images/myImage.jpg";

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing-element", {
      strings: [
        "Full Stack Developer",
        "React.js Specialist",
        "Node.js & Express Developer",
        "MCA Post Graduate",
        "Frontend Engineer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const stats = [
    { label: "Education", value: "MCA", sub: "Master of Computer App" },
    { label: "Projects Completed", value: "5+", sub: "Production-ready Web Apps" },
    { label: "Tech Stack", value: "10+", sub: "Modern Tools & Frameworks" },
    { label: "Code Quality", value: "100%", sub: "Responsive & Clean Architecture" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden py-12 px-6 sm:px-12 lg:px-24 flex flex-col justify-center">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
              Available for full-time & freelance opportunities <HiSparkles className="text-yellow-400" />
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wide uppercase">
              Hello world, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Dineshkumar <span className="gradient-text">Ramaraj</span>
            </h1>
            <div className="text-xl sm:text-3xl font-display font-semibold text-slate-300 min-h-[44px] flex items-center justify-center lg:justify-start">
              <span>I am a&nbsp;</span>
              <span className="typing-element text-cyan-400 underline decoration-indigo-500/40 decoration-2 underline-offset-4 font-bold"></span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Passionate web developer with a <span className="text-white font-medium">Master's in Computer Applications (MCA)</span>. I craft modern, responsive, and high-performance web applications using React, Node.js, and clean software architectural practices.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-white bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Explore Projects</span>
              <FaArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Get In Touch</span>
            </Link>

            <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-slate-800">
              <a
                href="https://github.com/DineshRamaraj"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/dineshkumar-ramaraj-b1275a228/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Avatar Card Column */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <div className="relative w-72 sm:w-80 h-72 sm:h-80 group">
            
            {/* Ambient behind image */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500 via-cyan-500 to-purple-600 opacity-60 blur-xl group-hover:opacity-80 transition duration-500 animate-pulse-glow" />

            {/* Image container card */}
            <div className="relative w-full h-full rounded-3xl overflow-hidden glass-card p-2 border-2 border-slate-700/60 shadow-2xl">
              <img
                src={myProfileImage}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://res.cloudinary.com/dhwz560kk/image/upload/v1728285268/i1cxu4ljvzdf6vj2sg1f.jpg";
                }}
                alt="Dineshkumar Ramaraj"
                className="w-full h-full object-cover object-top rounded-2xl filter contrast-105 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl glass-card border border-indigo-500/40 shadow-xl flex items-center gap-2 animate-float">
              <FaReact className="text-cyan-400 animate-spin" style={{ animationDuration: '8s' }} size={20} />
              <span className="text-xs font-semibold text-white">React.js</span>
            </div>

            <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl glass-card border border-emerald-500/40 shadow-xl flex items-center gap-2 animate-float" style={{ animationDelay: '1.5s' }}>
              <FaNodeJs className="text-emerald-400" size={20} />
              <span className="text-xs font-semibold text-white">Node.js</span>
            </div>

            <div className="absolute top-1/2 -left-6 px-3 py-1.5 rounded-xl glass-card border border-purple-500/40 shadow-xl hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: '2.5s' }}>
              <FaGraduationCap className="text-purple-400" size={18} />
              <span className="text-xs font-semibold text-white">MCA Grad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Highlight Stats Banner */}
      <div className="max-w-7xl mx-auto w-full mt-16 pt-8 border-t border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl glass-card glass-card-hover flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              <span className="text-2xl sm:text-3xl font-display font-extrabold gradient-text">
                {stat.value}
              </span>
              <span className="text-sm font-semibold text-white mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {stat.sub}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
