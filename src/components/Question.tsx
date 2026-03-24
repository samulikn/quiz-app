import type { ReactNode } from "react";
import useScore from "../hooks/useScore";
import useQuiz from "../hooks/useQuiz";

function Question(): ReactNode {
  const { state } = useScore();
  const { currentIndex, countQuestion } = state;
  const { questions } = useQuiz();

  const question = questions[currentIndex].question;
  const currentQuestion: number = currentIndex + 1;

  const fill: number = (currentQuestion * 100) / countQuestion;

  return (
    <div className="flex flex-col xl:pt-1">
      <p className="mb-3 text-sm/6 italic sm:mb-6 sm:text-xl/6">
        Question {currentQuestion} of 10
      </p>
      <h3 className="text-xl leading-[1.2] font-medium sm:text-4xl">
        {question}
      </h3>
      <div
        className={
          "mt-6 w-full h-4 bg-white rounded-full sm:mt-10 xl:mt-46 dark:bg-blue-850"
        }
      >
        <div
          className={
            "m-1 h-2 bg-purple-600 rounded-full transition-all duration-400"
          }
          style={{ width: `${fill}%` }}
        />
      </div>
    </div>
  );
}

export default Question;
