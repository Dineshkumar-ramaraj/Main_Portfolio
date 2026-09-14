import React from "react";
import { Link } from "react-router-dom";
import { 
  FaGraduationCap, 
  FaCode, 
  FaRocket, 
  FaLaptopCode, 
  FaCheckCircle, 
  FaArrowRight,
  FaServer,
  FaLayerGroup
} from "react-icons/fa";

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap className="text-cyan-400" size={24} />,
      title: "Master's Degree (MCA)",
      description: "Holds a Master of Computer Applications, establishing a strong foundation in computer science and software principles.",
    },
    {
      icon: <FaLaptopCode className="text-indigo-400" size={24} />,
      title: "Full Stack Focus",
      description: "Specialized in building end-to-end applications using modern JavaScript/TypeScript, React.js, and Node.js.",
    },
    {
      icon: <FaRocket className="text-purple-400" size={24} />,
      title: "Hands-on Project Builder",
      description: "Created real-world applications including quiz assessment portals, movie discovery apps, and complex streaming clones.",
    },
    {
      icon: <FaCheckCircle className="text-emerald-400" size={24} />,
      title: "Clean Code & UX",
      description: "Dedicated to semantic markup, mobile-first responsiveness, intuitive interactions, and performant architectures.",
    },
  ];

  const competencies = [
    {
      icon: <FaCode className="text-cyan-400" size={22} />,
      title: "Frontend Engineering",
      points: ["React.js & Hooks", "Tailwind CSS & Modern CSS", "State Management & React Router", "Responsive Mobile-First UI"],
    },
    {
      icon: <FaServer className="text-indigo-400" size={22} />,
      title: "Backend & Database",
      points: ["Node.js & Express", "RESTful API Development", "SQL & MySQL Queries", "MongoDB & Data Modeling"],
    },
    {
      icon: <FaLayerGroup className="text-purple-400" size={22} />,
      title: "Workflow & Engineering",
      points: ["Git & GitHub Collaboration", "Component-Driven Architecture", "Performance Optimization", "Agile Learning Mindset"],
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            Get To Know Me
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            About <span className="gradient-text">Dineshkumar</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer who loves turning complex problems into elegant, fast, and accessible digital products.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl space-y-6 border border-slate-800 shadow-xl">
            <h2 className="text-2xl font-display font-bold text-white flex items-center gap-3">
              <span>My Journey & Philosophy</span>
              <span className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent"></span>
            </h2>

            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p>
                I am a passionate web developer with a <strong className="text-white font-semibold">Master’s degree in Computer Applications (MCA)</strong>. My journey into tech began with a deep curiosity about how digital interfaces work under the hood, which quickly evolved into a dedicated passion for creating high-caliber web applications.
              </p>
              <p>
                Specializing in the modern JavaScript ecosystem, I focus on building with <strong className="text-cyan-400 font-medium">React.js</strong> on the frontend and <strong className="text-indigo-400 font-medium">Node.js & Express</strong> on the backend. From state management to responsive design systems, I enjoy every layer of turning an idea into a deployed, interactive reality.
              </p>
              <p>
                I have built projects such as a <span className="text-white font-medium">Quiz Assessment Platform</span>, a <span className="text-white font-medium">Dynamic Movies Application</span> with external API sync, and high-fidelity platform clones. These experiences have honed my ability to handle real-time data, optimize rendering performance, and write maintainable code.
              </p>
              <p>
                As a fast learner and enthusiastic problem solver, I am excited to collaborate with engineering teams to build innovative web products that deliver exceptional user experiences.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white bg-indigo-600/80 hover:bg-indigo-600 transition-colors"
              >
                <span>View My Technical Skills</span>
                <FaArrowRight size={12} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <span>Explore Projects</span>
              </Link>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-5 space-y-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass-card glass-card-hover p-5 rounded-2xl flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1 leading-normal">
                    {item.description}
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
              What I Bring To Your Team
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Combining academic grounding with hands-on modern web development.
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
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
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
