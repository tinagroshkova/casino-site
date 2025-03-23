import { useState, useEffect } from "react";
import styles from "./ThemeSwitcher.module.css";
import lightIcon from "../../assets/app-light-mode.svg";
import darkIcon from "../../assets/app-dark-mode.svg";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`${styles.themeSwitcher} ${className || ""}`} onClick={toggleTheme} aria-label="Toggle Theme">
      <img src={theme === "light" ? lightIcon : darkIcon} alt="Theme Switcher" />
    </div>
  );
};

export default ThemeSwitcher;

