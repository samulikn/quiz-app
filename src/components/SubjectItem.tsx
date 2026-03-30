import { type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import useQuiz from "../hooks/useQuiz";
import useScore from "../hooks/useScore";
import type { QuestionType } from "../context/QuizContext";
import { icon, bgColor } from "../utils/subjectStyles";
import { loadQuestions } from "../utils/loadQuestions";

export type QuizDataType = {
  title: string;
  icon: string;
  questions: QuestionType[];
};

export let cache: QuizDataType[] | null = null;

export type SubjectItemProps = {
  subject: string;
};

function SubjectItem({ subject }: SubjectItemProps): ReactNode {
  const { state, dispatch } = useScore();
  const { setQuestions } = useQuiz();
  const storedSubject = state.subject;

  const navigate = useNavigate();

  const iconSrc = icon(subject);
  const iconBgColor = bgColor(subject);

  const getQuestions = async (subject: string) => {
    if (storedSubject && storedSubject !== subject) {
      dispatch({ type: "RESET" });
    }

    const data = loadQuestions(subject);

    if (data) {
      dispatch({ type: "SET_SUBJECT", payload: subject });
      dispatch({
        type: "SET_COUNTQUESTION",
        payload: data.length,
      });
      setQuestions(data);
    }

    navigate(`/quiz/${subject}`);
  };

  return (
    <button
      type="button"
      onClick={() => {
        getQuestions(`${subject}`);
      }}
      className="w-full p-4 flex gap-4 items-center text-lg font-medium bg-white dark:bg-blue-850 rounded-xl shadow-lg
                           sm:text-3xl sm:gap-8 sm:rounded-3xl lg:p-6"
    >
      <img
        src={iconSrc}
        alt={`icon ${subject}`}
        className={`${iconBgColor} w-10 h-10 p-1.5 rounded-xl sm:w-14 sm:h-14`}
      />
      {subject}
    </button>
  );
}

export default SubjectItem;
