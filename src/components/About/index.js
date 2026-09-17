import React from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaCode,
  FaRocket,
  FaLaptopCode,
  FaArrowRight,
  FaBrain,
  FaChartLine,
  FaCertificate
} from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  const certifications = [
    {
      institution: "IIT Kharagpur & Masai Learning",
      title: "Generative AI, LLMs & RAG",
      desc: "Certified in building context-aware AI applications, fine-tuning, retrieval-augmented generation pipelines, and prompt engineering.",
      badge: "IIT KGP Certified",
      icon: <FaBrain className="text-cyan-400" size={24} />,
    },
    {
      institution: "Intellipaat",
      title: "AI / ML & Data Science",
      desc: "Comprehensive mastery of Python, NumPy, Pandas, Matplotlib, Scipy, Statistics, Probability, and Machine Learning algorithms.",
      badge: "In-Progress / Certified",
      icon: <FaChartLine className="text-emerald-400" size={24} />,
    },
    {
      institution: "Nxtwave Disruptive Technologies",
      title: "Full Stack Web Development & DSA",
      desc: "Intensive training covering Frontend (React.js), Backend (Node.js, Express), Databases (SQL, MongoDB), and Data Structures & Algorithms.",
      badge: "Alumni Verified",
      icon: <FaLaptopCode className="text-indigo-400" size={24} />,
    },
    {
      institution: "Post Graduation",
      title: "Master of Computer Applications (MCA)",
      desc: "Advanced academic foundation in software architecture, computer networking, systems analysis, and enterprise computing.",
      badge: "Post Graduate",
      icon: <FaGraduationCap className="text-purple-400" size={24} />,
    },
  ];

  const competencies = [
    {
      icon: <FaBrain className="text-cyan-400" size={22} />,
      title: "AI, ML & Generative AI",
      points: [
        "LLMs & RAG Architecture",
        "LangChain & Vector Databases",
        "Machine Learning Algorithms",
        "NumPy, Pandas & Matplotlib",
      ],
    },
    {
      icon: <FaCode className="text-emerald-400" size={22} />,
      title: "Full Stack Engineering",
      points: [
        "React.js & Tailwind CSS",
        "Node.js & Express.js REST APIs",
        "SQL / MySQL & MongoDB",
        "Data Structures & Algorithms (DSA)",
      ],
    },
    {
      icon: <FaRocket className="text-purple-400" size={22} />,
      title: "Freelance & Production Ready",
      points: [
        "End-to-end Project Delivery",
        "Clean, Maintainable Architecture",
        "Performance Optimization & SEO",
        "Agile Communication & Timely Delivery",
      ],
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Background ambient lighting */}
      <div
        className="absolute top-20 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow1 }}
      />
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow2, animationDelay: '2s' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${theme.badgeBg}`}>
            Get To Know Me
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Dineshkumar</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Full Stack & AI/ML Developer blending computer science fundamentals with cutting-edge Generative AI and modern web engineering.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl space-y-6 border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <span>My Background & Journey</span>
              <span className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent"></span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I hold a <strong className="text-white font-semibold">Master of Computer Applications (MCA)</strong> and have dedicated my career to mastering modern software engineering. My technical foundation was built through rigorous hands-on training at <strong className="text-emerald-400 font-semibold">Nxtwave</strong>, where I developed full stack proficiency in React, Node.js, and solid algorithmic problem-solving with <strong className="text-white font-medium">Data Structures & Algorithms (DSA)</strong>.
              </p>
              <p>
                Expanding my expertise into modern intelligent systems, I earned certifications in <strong className="text-cyan-400 font-semibold">Generative AI, LLMs, and RAG</strong> from <strong className="text-white font-medium">Masai Learning & IIT Kharagpur</strong>. Currently, I am further expanding into deep <strong className="text-indigo-400 font-semibold">Data Science & AI/ML with Intellipaat</strong>—focusing on NumPy, Pandas, Matplotlib, Scipy, Statistics, Probability, and predictive modeling.
              </p>
              <p>
                Beyond full-time engineering roles, I am actively interested in <strong className="text-white font-semibold">Freelancing projects</strong>—helping startups, businesses, and clients architect AI-powered features, intuitive dashboards, and performant web applications.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/skills"
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r ${theme.buttonGradient} shadow-md transition-all hover:scale-105`}
              >
                <span>View My AI & Tech Skills</span>
                <FaArrowRight size={12} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <span>Discuss a Freelance Project</span>
              </Link>
            </div>
          </div>

          {/* Right: Certifications & Education Timeline */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 px-1">
              <FaCertificate style={{ color: theme.primary }} />
              <span>Certifications & Education</span>
            </h3>

            {certifications.map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-start gap-4 border border-slate-800/80"
              >
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs font-medium text-slate-300">
                    {item.institution}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Competencies Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              What I Bring To The Table
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              A comprehensive fusion of Full Stack engineering, AI/ML development, and freelance adaptability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {competencies.map((comp, idx) => (
              <div
                key={idx}
                className="glass-card glass-card-hover p-6 rounded-3xl space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 w-fit mb-4">
                    {comp.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white font-display">
                    {comp.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {comp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }}></span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
