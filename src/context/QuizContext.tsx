import { createContext, useEffect, useState, type ReactNode } from "react";
import { type QuizDataType } from "../functions/api";
import data from "../data/data.json";

export type OptionType = string;

export type QuestionType = {
  question: string;
  options: OptionType[];
  answer: string;
};

const initQuestionsState: QuestionType[] = [];

export type UseQuizContextType = {
  questions: QuestionType[];
  setQuestions: (questions: QuestionType[]) => void;
};

const initQuizContext = {
  questions: [],
  setQuestions: () => {},
};

const QuizContext = createContext<UseQuizContextType>(initQuizContext);

type ChildrenType = { children?: ReactNode };

export const QuizProvider = ({ children }: ChildrenType) => {
  const [questions, setQuestions] =
    useState<QuestionType[]>(initQuestionsState);
  const stored = localStorage.getItem("quizState");

  useEffect(() => {
    if (stored) {
      const { subject } = JSON.parse(stored);
      const filteredData = data.quizzes.find(
        (item: QuizDataType) => item.title === subject,
      );
      const questionsArray = filteredData
        ? filteredData.questions
        : initQuestionsState;
      setQuestions(questionsArray);
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        setQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
