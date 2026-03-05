import Question from "./Question";
import OptionList from "./OptionList";
// import type { QuestionsType, OptionType } from "./Content";
import type { ReactNode } from "react";
import type { OptionType } from "./Option";

// export type OptionType = {
//   options: string[];
// };

export type QuestionsType = {
  question: string;
  options: OptionType[];
  answer: string;
};

type QuestionContainerType = {
  questions: QuestionsType[];
};

function QuestionContainer({ questions }: QuestionContainerType): ReactNode {
  //find the proper question
  let i = 4;
  length = questions.length;
  const question: QuestionsType = questions[i];
  // console.log(question)

  return (
    <div className="w-full pt-8 px-6 flex flex-col gap-10 xl:flex-row xl:pl-5 xl:gap-28">
      <Question
        question={question?.question}
        questionNum={i + 1}
        countQuestions={length}
      />
      <OptionList options={question.options} />
    </div>
  );
}

export default QuestionContainer;
