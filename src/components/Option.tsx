import { type ReactNode } from "react";
// import type { OptionType } from "../context/QuizContext";
import iconCorrect from "../assets/images/icon-correct.svg";
import iconIncorrect from "../assets/images/icon-incorrect.svg";

type OptionTypeProps = {
  letter: string;
  option: string;
  answer: string | null;
  selected: string | null;
  isSubmitted: boolean;
  onSelect: () => void;
};

function Option({
  letter,
  option,
  answer,
  selected,
  isSubmitted,
  onSelect,
}: OptionTypeProps): ReactNode {
  const getOptionClass = (optionValue: string) => {
    if (!answer) {
      return selected === optionValue
        ? { ring: "ring-purple-600", bg: "bg-purple-600", text: "text-white" }
        : { ring: "ring-transparent", bg: "bg-grey-50", text: "text-grey-500" };
    }

    if (selected === optionValue && selected === answer) {
      return { ring: "ring-green-500", bg: "bg-green-500", text: "text-white" };
    }
    if (selected === optionValue && selected !== answer) {
      return { ring: "ring-red-500", bg: "bg-red-500", text: "text-white" };
    }
    return {
      ring: "ring-transparent",
      bg: "bg-grey-50",
      text: "text-grey-500",
    };
  };

  const styles = getOptionClass(option);

  return (
    <label
      htmlFor={letter}
      className={`p-4 bg-white rounded-xl dark:bg-blue-850 shadow-md sm:rounded-3xl xl:p-6
                    ${styles.ring} ring-2 
                    flex items-center gap-4 sm:gap-8`}
    >
      <div
        className={`w-10 h-10 shrink-0 rounded-lg text-grey-500 flex items-center justify-center sm:w-14 sm:h-14
                       ${styles.bg} ${styles.text}`}
      >
        <input
          type="radio"
          id={letter}
          name="option"
          value={option}
          onChange={onSelect}
          disabled={isSubmitted}
          className="sr-only"
        />

        {letter}
      </div>
      {option}
      <div className="ml-auto shrink-0 w-8 h-8 sm:w-10 sm:h-10">
        {option === answer ? (
          <img src={iconCorrect} alt="icon-correct" />
        ) : answer && option === selected && selected !== answer ? (
          <img src={iconIncorrect} alt="icon-incorrect" />
        ) : (
          <></>
        )}
      </div>
    </label>
  );
}

export default Option;
