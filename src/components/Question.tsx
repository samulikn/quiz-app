import type { ReactNode } from "react";

type QuestionTypeProp = {
  question: string;
  questionNum: number;
  countQuestions: number;
};

function Question({
  question,
  questionNum,
  countQuestions,
}: QuestionTypeProp): ReactNode {
  const fill: number = (questionNum * 100) / countQuestions;
  return (
    <div className="flex flex-col xl:pt-1">
      <p className="mb-3 text-sm/6 italic sm:text-xl/6 xl:mb-6">
        Question {questionNum} of 10
      </p>
      <h3 className="text-xl leading-[1.2] font-medium sm:text-4xl">
        {question}
      </h3>
      {/* Progress bar move to function */}
      <div
        className={
          "mt-6 w-full h-4 bg-white rounded-full xl:mt-46 dark:bg-blue-850"
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
