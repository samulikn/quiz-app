import { createContext, useEffect, useState, type ReactElement } from "react";

export type ThemeType = "light" | "dark";

type ThemeContextType = {
  theme: ThemeType;
  toggleTheme: () => void;
};

// const initThemeState = (localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)) ? "dark" : "light";

const ThemeContext = createContext<ThemeContextType | null>(null);

type ChildrenType = { children?: ReactElement | ReactElement[] };

export const ThemeContextProvider = ({ children }: ChildrenType) => {
  const [theme, setTheme] = useState<ThemeType>("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const isDark: boolean =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    const newTheme = isDark ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("theme", newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
