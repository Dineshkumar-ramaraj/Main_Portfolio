import React, { createContext, useContext, useState, useEffect } from "react";

export const themes = {
  emerald: {
    id: "emerald",
    name: "Emerald Matrix",
    bgColor: "#06120E",
    cardBg: "rgba(10, 26, 20, 0.7)",
    primary: "#10B981",
    secondary: "#14B8A6",
    accent: "#34D399",
    gradientText: "from-emerald-400 via-teal-300 to-cyan-400",
    glow1: "rgba(16, 185, 129, 0.15)",
    glow2: "rgba(20, 184, 166, 0.12)",
    buttonGradient: "from-emerald-600 via-teal-600 to-cyan-600",
    badgeBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    borderActive: "border-emerald-500/50",
  },
  indigo: {
    id: "indigo",
    name: "Midnight Indigo",
    bgColor: "#080C14",
    cardBg: "rgba(15, 23, 42, 0.7)",
    primary: "#6366F1",
    secondary: "#38BDF8",
    accent: "#818CF8",
    gradientText: "from-cyan-400 via-indigo-400 to-purple-400",
    glow1: "rgba(99, 102, 241, 0.15)",
    glow2: "rgba(56, 189, 248, 0.12)",
    buttonGradient: "from-indigo-600 via-indigo-500 to-cyan-500",
    badgeBg: "bg-indigo-500/10 text-cyan-400 border-indigo-500/30",
    borderActive: "border-cyan-500/50",
  },
  violet: {
    id: "violet",
    name: "Electric Violet",
    bgColor: "#0B0714",
    cardBg: "rgba(24, 12, 38, 0.7)",
    primary: "#A855F7",
    secondary: "#EC4899",
    accent: "#C084FC",
    gradientText: "from-purple-400 via-fuchsia-400 to-pink-400",
    glow1: "rgba(168, 85, 247, 0.15)",
    glow2: "rgba(236, 72, 153, 0.12)",
    buttonGradient: "from-purple-600 via-fuchsia-600 to-pink-600",
    badgeBg: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    borderActive: "border-purple-500/50",
  },
  amber: {
    id: "amber",
    name: "Sunset Amber",
    bgColor: "#120A05",
    cardBg: "rgba(28, 16, 10, 0.7)",
    primary: "#F59E0B",
    secondary: "#F43F5E",
    accent: "#FBBF24",
    gradientText: "from-amber-400 via-orange-400 to-rose-400",
    glow1: "rgba(245, 158, 11, 0.15)",
    glow2: "rgba(244, 63, 94, 0.12)",
    buttonGradient: "from-amber-600 via-orange-600 to-rose-600",
    badgeBg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    borderActive: "border-amber-500/50",
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const saved = localStorage.getItem("portfolio-theme");
    return saved && themes[saved] ? saved : "emerald";
  });

  const theme = themes[currentTheme];

  useEffect(() => {
    localStorage.setItem("portfolio-theme", currentTheme);
    document.body.style.backgroundColor = theme.bgColor;
  }, [currentTheme, theme]);

  const changeTheme = (themeId) => {
    if (themes[themeId]) {
      setCurrentTheme(themeId);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, theme, changeTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
