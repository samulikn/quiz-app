import { useState, type ReactNode } from "react";
import Option from "./Option";
import iconError from "../assets/images/icon-error.svg";
import { useNavigate } from "react-router-dom";
import useScore from "../hooks/useScore";
import useQuiz from "../hooks/useQuiz";

export type SelectedAnswerType = {
  id: string | null;
  selectedAnswer: string | null;
};

function OptionList(): ReactNode {
  const [selected, setSelected] = useState<string | null>(null);
  const [correctAnswer, setCorrectAnswer] = useState<string | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const { state, dispatch } = useScore();
  const { questions } = useQuiz();
  const { currentIndex, countQuestion, isFinished } = state;
  const options = questions[currentIndex].options;
  const answer = questions[currentIndex].answer;
  const navigate = useNavigate();

  const selectedAnswer = (option: string) => {
    if (isSubmitted) {
      return;
    }

    setSelected(option);
    setIsError(false);
  };

  const handleSubmitAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (isFinished) {
      return;
    }

    if (!selected) {
      setIsError(true);
      return;
    }

    setCorrectAnswer(answer);
    if (selected === answer) {
      dispatch({ type: "INCREMENT_SCORE" });
    }

    setIsSubmitted(true);
  };

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setSelected(null);
    setCorrectAnswer(null);
    setIsSubmitted(false);

    if (currentIndex + 1 === countQuestion) {
      dispatch({ type: "FINISH_QUIZ" });
      navigate("/result");
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  return !options.length ? (
    <></>
  ) : (
    <form className="basis-1/2 shrink-0">
      <fieldset className="w-full flex flex-col gap-4 text-lg font-medium sm:text-3xl xl:pl-3 sm:gap-8">
        <legend className="sr-only">Please select your your answer:</legend>
        <ul className="flex flex-col gap-4 sm:gap-6 xl:gap-4">
          {options.map((option, index) => {
            const letter = String.fromCharCode(65 + index);
            return (
              <li key={letter}>
                <Option
                  letter={letter}
                  option={option}
                  answer={correctAnswer}
                  selected={selected}
                  isSubmitted={isSubmitted}
                  onSelect={() => {
                    selectedAnswer(option);
                  }}
                />
              </li>
            );
          })}
        </ul>
        {isSubmitted ? (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="p-4 bg-purple-500 rounded-xl text-white shadow-md sm:p-8 sm:rounded-3xl"
          >
            {isFinished ? "Results" : "Next Question"}
          </button>
        ) : (
          <button
            type="submit"
            onClick={handleSubmitAnswer}
            disabled={isError}
            className="p-4 bg-purple-600 rounded-xl text-white shadow-md sm:p-8 sm:rounded-3xl disabled:opacity-50"
          >
            Submit Answer
          </button>
        )}
        {isError ? (
          <div className="mb-10 flex gap-2 justify-center items-center text-red-500 text-center font-normal text-base sm:text-2xl/6">
            <img src={iconError} alt="icon error" />
            <p>Please select an answer</p>
          </div>
        ) : (
          <></>
        )}
      </fieldset>
    </form>
  );
}

export default OptionList;
