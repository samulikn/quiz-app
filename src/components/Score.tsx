import { useNavigate } from "react-router-dom";
import { icon, bgColor } from "../utils/subjectStyles";
import useScore from "../hooks/useScore";
import useQuiz from "../hooks/useQuiz";

function Score() {
  const navigate = useNavigate();
  const { state, dispatch } = useScore();
  const { subject, countQuestion, score } = state;
  const { setQuestions } = useQuiz();

  const iconSrc = icon(subject);
  const iconBgColor = bgColor(subject);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch({ type: "RESET" });
    setQuestions([]);
    navigate("/");
  };

  return (
    <div className="pt-8 px-6 flex flex-col mx-auto gap-10 sm:w-11/12 sm:px-0 sm:gap-16 xl:w-full xl:flex-row xl:gap-32 xl:justify-between">
      <div className="text-5xl sm:text-6xl xl:pl-4">
        <h2 className="mb-2 font-light">Quiz completed</h2>
        <h3 className="font-medium">You scored...</h3>
      </div>
      <div className="xl:basis-1/2 xl:shrink-0 xl:px-4">
        <article className="mb-4 p-8 bg-white rounded-2xl flex flex-col gap-4 items-center sm:mb-8 sm:p-12 sm:gap-10 sm:rounded-3xl dark:bg-blue-850">
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={iconSrc}
              alt="subject icon"
              className={`${iconBgColor} w-10 h-10 rounded-xl sm:w-14 sm:h-14`}
            />
            <p className="text-lg font-medium sm:text-3xl">{subject}</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-medium text-8xl sm:text-12xl">{score}</p>
            <p className="text-grey-500 text-lg font-medium sm:text-2xl/6 xl:font-normal dark:text-blue-300">
              out of {countQuestion}
            </p>
          </div>
        </article>
        <button
          type="button"
          onClick={handleReset}
          className="p-4 w-full bg-purple-600 text-white rounded-2xl text-lg font-medium sm:text-3xl sm:p-8 sm:rounded-3xl"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Score;
