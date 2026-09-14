import React, { useState } from "react";
import { 
  SiHtml5, 
  SiJavascript, 
  SiReact, 
  SiRedux, 
  SiTailwindcss, 
  SiBootstrap,
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiMysql, 
  SiCplusplus, 
  SiPython, 
  SiGit, 
  SiGithub, 
  SiPostman 
} from "react-icons/si";
import { FaJava, FaDatabase, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    proficiency: 88,
    level: "Advanced",
    icon: <SiReact className="text-[#61DAFB]" size={36} />,
    color: "#61DAFB",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    proficiency: 85,
    level: "Advanced",
    icon: <SiJavascript className="text-[#F7DF1E]" size={36} />,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    category: "frontend",
    proficiency: 95,
    level: "Expert",
    icon: <SiHtml5 className="text-[#E34F26]" size={36} />,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    category: "frontend",
    proficiency: 90,
    level: "Expert",
    icon: <FaCss3Alt className="text-[#1572B6]" size={36} />,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    proficiency: 90,
    level: "Advanced",
    icon: <SiTailwindcss className="text-[#06B6D4]" size={36} />,
    color: "#06B6D4",
  },
  {
    name: "Redux & Context",
    category: "frontend",
    proficiency: 75,
    level: "Proficient",
    icon: <SiRedux className="text-[#764ABC]" size={36} />,
    color: "#764ABC",
  },
  {
    name: "Bootstrap",
    category: "frontend",
    proficiency: 85,
    level: "Advanced",
    icon: <SiBootstrap className="text-[#7952B3]" size={36} />,
    color: "#7952B3",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    proficiency: 80,
    level: "Advanced",
    icon: <SiNodedotjs className="text-[#339933]" size={36} />,
    color: "#339933",
  },
  {
    name: "Express.js",
    category: "backend",
    proficiency: 78,
    level: "Proficient",
    icon: <SiExpress className="text-slate-200" size={36} />,
    color: "#CBD5E1",
  },
  {
    name: "SQL & Relational DB",
    category: "backend",
    proficiency: 82,
    level: "Advanced",
    icon: <FaDatabase className="text-[#0284C7]" size={36} />,
    color: "#0284C7",
  },
  {
    name: "MySQL",
    category: "backend",
    proficiency: 80,
    level: "Advanced",
    icon: <SiMysql className="text-[#4479A1]" size={36} />,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    category: "backend",
    proficiency: 78,
    level: "Proficient",
    icon: <SiMongodb className="text-[#47A248]" size={36} />,
    color: "#47A248",
  },

  // Programming Languages
  {
    name: "C++",
    category: "programming",
    proficiency: 80,
    level: "Proficient",
    icon: <SiCplusplus className="text-[#00599C]" size={36} />,
    color: "#00599C",
  },
  {
    name: "Python",
    category: "programming",
    proficiency: 78,
    level: "Proficient",
    icon: <SiPython className="text-[#3776AB]" size={36} />,
    color: "#3776AB",
  },
  {
    name: "Java",
    category: "programming",
    proficiency: 65,
    level: "Intermediate",
    icon: <FaJava className="text-[#ED8B00]" size={36} />,
    color: "#ED8B00",
  },

  // Tools & Workflow
  {
    name: "Git",
    category: "tools",
    proficiency: 85,
    level: "Advanced",
    icon: <SiGit className="text-[#F05032]" size={36} />,
    color: "#F05032",
  },
  {
    name: "GitHub",
    category: "tools",
    proficiency: 88,
    level: "Advanced",
    icon: <SiGithub className="text-white" size={36} />,
    color: "#FFFFFF",
  },
  {
    name: "VS Code",
    category: "tools",
    proficiency: 95,
    level: "Expert",
    icon: <VscVscode className="text-[#007ACC]" size={36} />,
    color: "#007ACC",
  },
  {
    name: "Postman",
    category: "tools",
    proficiency: 80,
    level: "Proficient",
    icon: <SiPostman className="text-[#FF6C37]" size={36} />,
    color: "#FF6C37",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & Database" },
  { id: "programming", label: "Languages" },
  { id: "tools", label: "Tools & DevOps" },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Ambient background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.8s' }} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
            Technical Proficiency
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my technical toolkit, libraries, and frameworks across the full software stack.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 max-w-2xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-5 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle top indicator with skill brand color */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800/80 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/50">
                    {skill.level}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="pt-4 mt-2 border-t border-slate-800/60">
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="text-slate-400 font-medium">Proficiency</span>
                  <span className="text-cyan-400 font-mono font-bold">{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive callout */}
        <div className="p-8 rounded-3xl glass-card border border-slate-800 text-center max-w-4xl mx-auto space-y-3">
          <h3 className="text-xl font-bold font-display text-white">
            Looking for something specific?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            I continuously adapt to new technologies, libraries, and frameworks required by project demands.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
