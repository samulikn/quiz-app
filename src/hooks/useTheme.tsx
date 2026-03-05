import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export const UseThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("UseThemeContext must be used withing ThemeProvider");
  return context;
};
