import { useContext } from "react"
import QuizContext, { type UseQuizContextType } from "../context/QuizContext"

const useQuiz = () => {
    return useContext<UseQuizContextType>(QuizContext);
};

export default useQuiz;