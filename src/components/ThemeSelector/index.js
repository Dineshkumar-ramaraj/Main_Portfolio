import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FaPalette, FaCheck } from "react-icons/fa";

const ThemeSelector = () => {
  const { currentTheme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-slate-300 hover:text-white hover:border-slate-500 transition-all flex items-center gap-2 shadow-sm focus:outline-none"
        title="Change Theme Color"
        aria-label="Change Theme Color"
      >
        <FaPalette size={16} style={{ color: themes[currentTheme].primary }} />
        <span
          className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: themes[currentTheme].primary }}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-56 p-2 rounded-2xl glass-card border border-slate-700/80 shadow-2xl backdrop-blur-2xl z-50 animate-in fade-in zoom-in duration-200">
          <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-800/80">
            Select Theme Color
          </div>
          <div className="space-y-1 mt-1">
            {Object.values(themes).map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => {
                  changeTheme(t.id);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                  currentTheme === t.id
                    ? "bg-slate-800/90 text-white font-semibold"
                    : "text-slate-300 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-inner"
                    style={{ backgroundColor: t.primary }}
                  />
                  <span>{t.name}</span>
                </div>
                {currentTheme === t.id && (
                  <FaCheck size={11} style={{ color: t.primary }} />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSelector;
