// src/components/ThemeSwitcher.tsx
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Import icons
// import useDarkMode from "../hooks/useDarkMode";
import useDarkMode from "../../hooks/useDarkMode";

const ThemeSwitcher: React.FC = () => {
  const [theme, toggleTheme] = useDarkMode();
  const isDarkMode = theme === "dark";

  return (
    <button
      onClick={() => toggleTheme(isDarkMode ? "light" : "dark")}
      className="flex items-center p-2 bg-gray-200 dark:bg-gray-700 rounded-md transition duration-300"
    >
      {isDarkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-800" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
