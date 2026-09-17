import React from "react";
import toast from "react-hot-toast";
import { FaExternalLinkAlt, FaGithub, FaCheck } from "react-icons/fa";
import { IoCopyOutline } from "react-icons/io5";

const ProjectsList = ({ project }) => {
  const { githubUrl, websiteUrl, imageUrl, projectName, category, description, tech } = project;

  const copyTheUrl = () => {
    navigator.clipboard.writeText(websiteUrl);
    toast.success(`Copied link for ${projectName}!`, {
      icon: <FaCheck className="text-cyan-400" />,
    });
  };

  return (
    <li className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border border-slate-800/90 group shadow-xl transition-all duration-300">
      <div>
        {/* Project Thumbnail Image Container */}
        <div className="relative w-full h-48 sm:h-52 overflow-hidden bg-slate-900 border-b border-slate-800/80">
          <img
            src={imageUrl}
            alt={projectName}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop";
            }}
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/90 text-cyan-400 border border-cyan-500/30 backdrop-blur-md shadow-md">
              {category}
            </span>
          </div>

          {/* Quick Copy Link Button */}
          <div className="absolute top-4 right-4">
            <button
              type="button"
              onClick={copyTheUrl}
              className="p-2 rounded-xl bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700/60 backdrop-blur-md transition-all shadow-md active:scale-95"
              title="Copy live URL"
              aria-label="Copy live project link"
            >
              <IoCopyOutline size={16} />
            </button>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-400 transition-colors">
            {projectName}
          </h3>

          <p className="text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {description || "A dynamic and user-centric web application built with modern engineering practices and responsive layout."}
          </p>

          {/* Tech Stack Pills */}
          {tech && tech.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {tech.map((item, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-lg text-xs font-mono font-medium bg-slate-800/70 text-slate-300 border border-slate-700/40"
                >
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer Buttons */}
      <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/50 mt-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <FaGithub size={15} />
          <span>Code</span>
        </a>

        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-cyan-600 hover:opacity-95 shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
        >
          <span>Live Demo</span>
          <FaExternalLinkAlt size={12} />
        </a>
      </div>
    </li>
  );
};

export default ProjectsList;
