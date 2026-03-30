import Question from "./Question";
import OptionList from "./OptionList";
import { type ReactNode } from "react";
import useQuiz from "../hooks/useQuiz";
import useScore from "../hooks/useScore";

function QuestionContainer(): ReactNode {
  const { questions } = useQuiz();
  const { state } = useScore();
  const { currentIndex } = state;

  if (!questions || !questions.length || !questions[currentIndex]) {
    return <div className="m-4">Loading...</div>;
  }
  return (
    <div className="w-full pt-8 px-6 flex flex-col gap-10 
                    sm:px-8 sm:pt-12 xl:flex-row xl:pt-8 xl:px-5 xl:gap-29">
      <Question />
      <OptionList key={currentIndex} />
    </div>
  );
}

export default QuestionContainer;
