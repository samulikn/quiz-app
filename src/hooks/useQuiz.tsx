import { useContext } from "react";
import QuizContext, { type UseQuizContextType } from "../context/QuizContext";

const useQuiz = () => {
  const context = useContext<UseQuizContextType>(QuizContext);
  if (!context) throw new Error("useQuiz must be used withing QuizProvider");
  return context;
};

export default useQuiz;
