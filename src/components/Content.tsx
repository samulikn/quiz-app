import SubjectItem from "./SubjectItem";
import { type ReactNode } from "react";
import data from "../data/data.json";
import type { QuestionsType } from "./QuestionContainer";

// export type OptionType = {
//   options: string[];
// };

// export type QuestionsType = {
//   question: string;
//   options: OptionType[];
//   answer: string;
// };

export type QuizDataType = {
  title: string;
  icon: string;
  questions: QuestionsType[];
};

export type DataFileType = {
  quizzes: QuizDataType[];
};

function Content(): ReactNode {
  const quizData = data as DataFileType;

  return (
    <div className="px-6 py-8 flex flex-col gap-9 xl:flex-row sm:gap-16 lg:gap-35 sm:px-8 sm:py-8 xl:px-5">
      <div className="flex flex-col gap-4 text-nowrap xl:gap-13">
        <div className="text-5xl flex flex-col gap-2 sm:text-6xl">
          <h2 className="font-light"> Welcome to the </h2>
          <h1 className="font-medium">Frontend Quiz!</h1>
        </div>
        <p className="text-grey-500 text-sm/6 italic dark:text-blue-300 sm:text-xl/6">
          Pick a subject to get started.
        </p>
      </div>
      <div className="xl:w-full">
        <ul className="flex flex-col gap-4 sm:gap-6 lg:gap-4">
          {quizData.quizzes.map((elem: QuizDataType) => (
            <li key={elem.title}>
              <SubjectItem subject={elem} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
