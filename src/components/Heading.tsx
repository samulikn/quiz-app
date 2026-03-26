import { type ReactNode } from "react";
import IconSunDark from "../../src/assets/images/icon-sun-dark.svg";
import IconSunLight from "../../src/assets/images/icon-sun-light.svg";
import IconMoonDark from "../../src/assets/images/icon-moon-dark.svg";
import IconMoonLight from "../../src/assets/images/icon-moon-light.svg";
import { UseThemeContext } from "../hooks/useTheme";
import { icon, bgColor } from "../utils/subjectStyles";
import useScore from "../hooks/useScore";

const Heading = (): ReactNode => {
  const { theme, toggleTheme } = UseThemeContext();

  const changeMode = () => {
    toggleTheme();
  };

  const { state } = useScore();
  const { subject } = state;

  const iconSrc = icon(subject);
  const iconBgColor = bgColor(subject);

  return (
    <header className="w-full px-6 py-4 flex items-center sm:px-8 sm:py-2 xl:px-5 xl:py-13">
      <div className="flex items-center gap-4 sm:gap-6">
        {!subject ? (
          <></>
        ) : (
          <img
            src={iconSrc}
            alt={subject}
            className={`${iconBgColor} w-10 h-10 p-1.5 rounded-xl sm:w-14 sm:h-14`}
          />
        )}
        <h2 className="text-lg font-medium sm:text-3xl">{subject}</h2>
      </div>
      <div className="ml-auto flex items-center gap-2 sm:gap-4">
        <img
          src={theme === "light" ? IconSunDark : IconSunLight}
          alt="icon sun"
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
        <button
          id="toggleTheme"
          aria-label="toggle dark mode"
          onClick={changeMode}
          className="p-1 w-8 h-5 sm:w-12 sm:h-7 flex items-center bg-purple-600 rounded-full duration-300 ease-in-out"
        >
          <div
            id="toggleThumb"
            className="w-3 h-3 sm:w-5 sm:h-5 dark:translate-x-3 bg-white rounded-full shadow-md duration-300 ease-in-out dark:sm:translate-x-5"
          ></div>
        </button>
        <img
          src={theme === "light" ? IconMoonDark : IconMoonLight}
          alt="icon moon"
          className="w-4 h-4 sm:w-6 sm:h-6"
        />
      </div>
    </header>
  );
};

export default Heading;
