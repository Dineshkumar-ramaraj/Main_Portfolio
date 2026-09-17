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
  SiPostman,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiLangchain,
  SiFastapi,
  SiStreamlit,
  SiJupyter
} from "react-icons/si";
import {
  FaJava,
  FaDatabase,
  FaCss3Alt,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaChartBar,
  FaLaptopCode
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { useTheme } from "../../context/ThemeContext";

const skillsData = [
  // Generative AI & LLMs (IIT Kharagpur & Masai)
  {
    name: "Generative AI & LLMs",
    category: "genai",
    proficiency: 88,
    level: "IIT KGP Certified",
    icon: <FaRobot className="text-[#38BDF8]" size={36} />,
    color: "#38BDF8",
  },
  {
    name: "RAG Architecture",
    category: "genai",
    proficiency: 85,
    level: "Advanced",
    icon: <FaBrain className="text-[#A855F7]" size={36} />,
    color: "#A855F7",
  },
  {
    name: "LangChain & Vector DBs",
    category: "genai",
    proficiency: 82,
    level: "Proficient",
    icon: <SiLangchain className="text-[#10B981]" size={36} />,
    color: "#10B981",
  },
  {
    name: "Prompt Engineering",
    category: "genai",
    proficiency: 90,
    level: "Expert",
    icon: <FaBrain className="text-[#EC4899]" size={36} />,
    color: "#EC4899",
  },

  // AI/ML & Data Science (Intellipaat)
  {
    name: "Python for Data Science",
    category: "aiml",
    proficiency: 88,
    level: "Advanced",
    icon: <SiPython className="text-[#3776AB]" size={36} />,
    color: "#3776AB",
  },
  {
    name: "NumPy",
    category: "aiml",
    proficiency: 90,
    level: "Advanced",
    icon: <SiNumpy className="text-[#013243]" size={36} />,
    color: "#4DABCF",
  },
  {
    name: "Pandas",
    category: "aiml",
    proficiency: 88,
    level: "Advanced",
    icon: <SiPandas className="text-[#150458]" size={36} />,
    color: "#E70488",
  },
  {
    name: "Matplotlib & Seaborn",
    category: "aiml",
    proficiency: 85,
    level: "Advanced",
    icon: <FaChartLine className="text-[#11557C]" size={36} />,
    color: "#11557C",
  },
  {
    name: "Scipy & Scientific Computing",
    category: "aiml",
    proficiency: 80,
    level: "Proficient",
    icon: <FaChartBar className="text-[#0054A6]" size={36} />,
    color: "#0054A6",
  },
  {
    name: "Statistics & Probability",
    category: "aiml",
    proficiency: 85,
    level: "Advanced",
    icon: <FaBrain className="text-[#F59E0B]" size={36} />,
    color: "#F59E0B",
  },
  {
    name: "Scikit-Learn (ML)",
    category: "aiml",
    proficiency: 82,
    level: "Proficient",
    icon: <SiScikitlearn className="text-[#F7931E]" size={36} />,
    color: "#F7931E",
  },
  {
    name: "PyTorch Basics",
    category: "aiml",
    proficiency: 70,
    level: "Intermediate",
    icon: <SiPytorch className="text-[#EE4C2C]" size={36} />,
    color: "#EE4C2C",
  },

  // DSA & Programming
  {
    name: "Data Structures & Algorithms (DSA)",
    category: "programming",
    proficiency: 85,
    level: "Nxtwave Trained",
    icon: <FaLaptopCode className="text-[#10B981]" size={36} />,
    color: "#10B981",
  },
  {
    name: "C++",
    category: "programming",
    proficiency: 80,
    level: "Proficient",
    icon: <SiCplusplus className="text-[#00599C]" size={36} />,
    color: "#00599C",
  },
  {
    name: "Java",
    category: "programming",
    proficiency: 70,
    level: "Intermediate",
    icon: <FaJava className="text-[#ED8B00]" size={36} />,
    color: "#ED8B00",
  },

  // Frontend (Nxtwave)
  {
    name: "React.js",
    category: "frontend",
    proficiency: 90,
    level: "Expert",
    icon: <SiReact className="text-[#61DAFB]" size={36} />,
    color: "#61DAFB",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    proficiency: 88,
    level: "Advanced",
    icon: <SiJavascript className="text-[#F7DF1E]" size={36} />,
    color: "#F7DF1E",
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
    name: "Redux & State Management",
    category: "frontend",
    proficiency: 80,
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

  // Backend & Database (Nxtwave)
  {
    name: "Node.js",
    category: "backend",
    proficiency: 82,
    level: "Advanced",
    icon: <SiNodedotjs className="text-[#339933]" size={36} />,
    color: "#339933",
  },
  {
    name: "Express.js",
    category: "backend",
    proficiency: 80,
    level: "Proficient",
    icon: <SiExpress className="text-slate-200" size={36} />,
    color: "#CBD5E1",
  },
  {
    name: "FastAPI",
    category: "backend",
    proficiency: 78,
    level: "Proficient",
    icon: <SiFastapi className="text-[#05998B]" size={36} />,
    color: "#05998B",
  },
  {
    name: "SQL & Relational DB",
    category: "backend",
    proficiency: 85,
    level: "Advanced",
    icon: <FaDatabase className="text-[#0284C7]" size={36} />,
    color: "#0284C7",
  },
  {
    name: "MySQL",
    category: "backend",
    proficiency: 82,
    level: "Advanced",
    icon: <SiMysql className="text-[#4479A1]" size={36} />,
    color: "#4479A1",
  },
  {
    name: "MongoDB",
    category: "backend",
    proficiency: 80,
    level: "Proficient",
    icon: <SiMongodb className="text-[#47A248]" size={36} />,
    color: "#47A248",
  },

  // Tools & Workflow
  {
    name: "Streamlit",
    category: "tools",
    proficiency: 85,
    level: "Advanced",
    icon: <SiStreamlit className="text-[#FF4B4B]" size={36} />,
    color: "#FF4B4B",
  },
  {
    name: "Jupyter Notebooks",
    category: "tools",
    proficiency: 90,
    level: "Expert",
    icon: <SiJupyter className="text-[#F37626]" size={36} />,
    color: "#F37626",
  },
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
    proficiency: 82,
    level: "Proficient",
    icon: <SiPostman className="text-[#FF6C37]" size={36} />,
    color: "#FF6C37",
  },
];

const categories = [
  { id: "all", label: "All Skills" },
  { id: "genai", label: "GenAI & RAG" },
  { id: "aiml", label: "AI/ML & Data Science" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend & DB" },
  { id: "programming", label: "DSA & Languages" },
  { id: "tools", label: "Tools" },
];

const Skills = () => {
  const { theme } = useTheme();
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Ambient background glows */}
      <div
        className="absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow1 }}
      />
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{ backgroundColor: theme.glow2, animationDelay: '1.8s' }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold ${theme.badgeBg}`}>
            AI, Full Stack & Data Science Expertise
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            Certified in Generative AI from IIT Kharagpur, mastering Data Science & ML via Intellipaat, and trained in Full Stack Web Development & DSA by Nxtwave.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 max-w-4xl mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${activeCategory === cat.id
                  ? `bg-gradient-to-r ${theme.buttonGradient} text-white shadow-md font-semibold`
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
                  <span className="font-mono font-bold" style={{ color: theme.secondary }}>{skill.proficiency}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${skill.proficiency}%`,
                      background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive callout */}
        <div className="p-8 rounded-3xl glass-card border border-slate-800 text-center max-w-4xl mx-auto space-y-3">
          <h3 className="text-xl font-bold font-display text-white">
            Need an AI, ML or Full Stack Solution for your project?
          </h3>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Available for freelance assignments, custom RAG/LLM chatbots, predictive ML models, and full-scale MERN applications.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Skills;
