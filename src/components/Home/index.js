import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaArrowRight, FaReact, FaRobot, FaBrain } from "react-icons/fa";
// import { HiSparkles } from "react-icons/hi2";
import myProfileImage from "../../assets/images/myImage.jpg";
import { useTheme } from "../../context/ThemeContext";
import ENV from "../../config/env";

const Home = () => {
  const { theme } = useTheme();
  const typedElementRef = useRef(null);
  const typedInstanceRef = useRef(null);

  useEffect(() => {
    if (!typedElementRef.current) return;

    typedInstanceRef.current = new Typed(typedElementRef.current, {
      strings: [
        "AI & ML Engineer",
        "Generative AI Specialist",
        "LLM & RAG Specialist",
        "Full Stack Developer",
        "Data Science Practitioner",
        "Software Developer",
        "Freelancer"
      ],
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1400,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      if (typedInstanceRef.current) {
        typedInstanceRef.current.destroy();
      }
    };
  }, []);

  const stats = [
    { label: "Education & Certs", value: "MCA & AI/ML", sub: "IIT KGP, Intellipaat & Masai" },
    { label: "Project Portfolio", value: "8+ Apps", sub: "Web, ML, RAG & Data Science" },
    { label: "Development Focus", value: "Full Stack & AI", sub: "Nxtwave Trained & DSA Proficient" },
    { label: "Opportunity Status", value: "Open", sub: "Available for Full-Time & Freelance" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden py-12 px-6 sm:px-12 lg:px-24 flex flex-col justify-center">
      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow1 }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow2, animationDelay: '1.5s' }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Content Column */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">

          {/* Status badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-lg backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
              Available for Full-Time & Freelance Projects <HiSparkles className="text-yellow-400" />
            </span>
          </div> */}

          {/* Heading */}
          <div className="space-y-2">
            <p className="font-mono text-sm sm:text-base font-semibold tracking-wide uppercase" style={{ color: theme.secondary }}>
              Hello world, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl font-display font-extrabold text-white tracking-tight leading-tight">
              Dineshkumar <span className="gradient-text">Ramaraj</span>
            </h1>
            <div className="text-xl sm:text-3xl font-display font-semibold text-slate-300 min-h-[52px] sm:min-h-[44px] flex flex-wrap items-center justify-center lg:justify-start">
              <span className="shrink-0">I am an&nbsp;</span>
              <span
                ref={typedElementRef}
                className="font-bold underline decoration-2 underline-offset-4 inline-block whitespace-nowrap"
                style={{ color: theme.primary }}
              ></span>
            </div>
          </div>

          {/* Bio Description */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            Passionate software engineer with an <span className="text-white font-semibold">MCA degree</span>. Certified in <span className="text-white font-semibold">Generative AI & RAG</span> from <span className="text-cyan-400 font-medium">IIT Kharagpur & Masai</span>, mastering <span className="text-white font-semibold">Data Science & AI/ML</span> via <span className="text-indigo-400 font-medium">Intellipaat</span>, and trained in <span className="text-emerald-400 font-medium">Full Stack Web Development & DSA</span> by <span className="text-white font-medium">Nxtwave</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/projects"
              className={`group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r ${theme.buttonGradient} shadow-lg shadow-slate-950/40 hover:opacity-95 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]`}
            >
              <span>Explore Projects</span>
              <FaArrowRight size={13} className="transition-transform group-hover:translate-x-1 duration-200" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 bg-slate-900/90 border border-slate-700/80 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Hire Me / Freelance</span>
            </Link>

            <div className="flex items-center gap-3 pl-2 sm:pl-4 border-l border-slate-800">
              <a
                href={ENV.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all hover:scale-110"
                aria-label="GitHub Profile"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={ENV.LINKEDIN_URL}
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
            <div
              className="absolute -inset-2 rounded-3xl opacity-60 blur-xl group-hover:opacity-80 transition duration-500 animate-pulse-glow"
              style={{
                background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
              }}
            />

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
            <div className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl glass-card border shadow-xl flex items-center gap-2 animate-float" style={{ borderColor: theme.primary }}>
              <FaBrain className="text-cyan-400 animate-pulse" size={18} />
              <span className="text-xs font-semibold text-white">GenAI & RAG</span>
            </div>

            <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-2xl glass-card border shadow-xl flex items-center gap-2 animate-float" style={{ borderColor: theme.secondary, animationDelay: '1.5s' }}>
              <FaRobot className="text-emerald-400" size={18} />
              <span className="text-xs font-semibold text-white">AI/ML & DS</span>
            </div>

            <div className="absolute top-1/2 -left-6 px-3 py-1.5 rounded-xl glass-card border border-purple-500/40 shadow-xl hidden sm:flex items-center gap-2 animate-float" style={{ animationDelay: '2.5s' }}>
              <FaReact className="text-cyan-400" size={16} />
              <span className="text-xs font-semibold text-white">MERN & DSA</span>
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
