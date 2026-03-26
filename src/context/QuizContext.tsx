import { createContext, useState, type ReactNode } from "react";
import { loadQuestions } from "../utils/loadQuestions";

export type OptionType = string;

export type QuestionType = {
  question: string;
  options: OptionType[];
  answer: string;
};

const initQuestionsState = (): QuestionType[] => {
  try {
    const stored = localStorage.getItem("quizState");
    if (!stored) return [];

    const { subject } = JSON.parse(stored);
    const filteredBySubject: QuestionType[] = loadQuestions(subject);

    return filteredBySubject;
    
  } catch(err) {
    console.error(`Loading data wasn't success. ${err}`);
    return [];
  }
};

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
