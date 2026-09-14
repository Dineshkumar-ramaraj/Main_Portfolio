import React, { useState } from "react";
import ProjectsList from "../ProjectsList";
import { FaCode } from "react-icons/fa";

const projectsData = [
  {
    id: "proj-1",
    projectName: "Quiz Assessment App",
    category: "Mini Projects",
    description: "An interactive assessment platform with real-time countdown timer, question navigation, scoring algorithms, and instant result analysis.",
    tech: ["React.js", "Timer Hooks", "State Management", "Tailwind CSS"],
    websiteUrl: "https://dinassessapp.ccbp.tech",
    githubUrl: "https://github.com/DineshRamaraj/React_Assessment_Mini_Project.git",
    imageUrl: "https://res.cloudinary.com/dhwz560kk/image/upload/v1728300833/xwtboqzgfbnhpwfc8phy.png",
  },
  {
    id: "proj-2",
    projectName: "Movie Discovery Portal",
    category: "Web Apps",
    description: "Dynamic entertainment platform allowing users to browse trending movies, filter by genres, view ratings, and access detailed movie profiles.",
    tech: ["React.js", "REST API", "React Slick", "Responsive UI"],
    websiteUrl: "https://dinmovieapp.ccbp.tech/",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git",
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "proj-3",
    projectName: "Netflix Interface Clone",
    category: "Clones",
    description: "Pixel-perfect clone of the Netflix streaming interface featuring hero banner trailers, categorized horizontal sliders, and responsive video modals.",
    tech: ["React.js", "Styled Components", "Video Embeds", "CSS Grid"],
    websiteUrl: "https://venkatsnetflix.ccbp.tech/",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git",
    imageUrl: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "proj-4",
    projectName: "YouTube Video Clone",
    category: "Clones",
    description: "Feature-packed video streaming clone with responsive grid feeds, interactive sidebar navigation, video player view, and theme toggling.",
    tech: ["React.js", "React Router", "Theme Context", "YouTube API"],
    websiteUrl: "https://venkatsnetflix.ccbp.tech/",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git",
    imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
  },
  {
    id: "proj-5",
    projectName: "Wikipedia Search Engine",
    category: "Mini Projects",
    description: "Clean and snappy search utility interfacing with Wikipedia's open API to fetch live summaries, thumbnails, and verified links instantly.",
    tech: ["JavaScript", "Fetch API", "DOM Manipulation", "Modern CSS"],
    websiteUrl: "https://dineshpedia.ccbp.tech/",
    githubUrl: "https://github.com/DineshRamaraj/React_Movie_App_Project.git",
    imageUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=600&auto=format&fit=crop",
  },
];

const categories = ["All", "Web Apps", "Clones", "Mini Projects"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projectsData
    : projectsData.filter((item) => item.category === activeCategory);

  return (
    <div className="relative min-h-[calc(100vh-80px)] py-16 px-6 sm:px-12 lg:px-24">
      {/* Background ambient lighting */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            Portfolio Work
          </div>
          <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            A curated showcase of applications, interfaces, and platforms I’ve built demonstrating frontend mastery and full stack integration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 max-w-md mx-auto backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-md shadow-indigo-500/20 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectsList project={project} key={project.id} />
          ))}
        </ul>

        {/* GitHub Callout */}
        <div className="p-8 rounded-3xl glass-card border border-slate-800 text-center max-w-3xl mx-auto space-y-4">
          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 w-fit mx-auto text-cyan-400">
            <FaCode size={24} />
          </div>
          <h3 className="text-xl font-bold font-display text-white">
            Interested in more repositories?
          </h3>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            Check out my GitHub for additional code experiments, components, and contributions.
          </p>
          <a
            href="https://github.com/DineshRamaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all hover:scale-105"
          >
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
