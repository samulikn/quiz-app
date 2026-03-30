import { createContext, useEffect, useReducer, type ReactNode } from "react";

export type ScoreStateType = {
  subject: string;
  countQuestion: number;
  currentIndex: number;
  score: number;
  isFinished: boolean;
};

const initScoreState: ScoreStateType = {
  subject: "",
  countQuestion: 0,
  currentIndex: 0,
  score: 0,
  isFinished: false,
};

type ScoreActionType =
  | { type: "SET_SUBJECT"; payload: string }
  | { type: "SET_COUNTQUESTION"; payload: number }
  | { type: "NEXT_QUESTION" }
  | { type: "INCREMENT_SCORE" }
  | { type: "FINISH_QUIZ" }
  | { type: "RESET" };

const scoreReducer = (
  state: ScoreStateType,
  action: ScoreActionType,
): ScoreStateType => {
  switch (action.type) {
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_COUNTQUESTION":
      return { ...state, countQuestion: action.payload };
    case "NEXT_QUESTION":
      const newIndex: number = state.currentIndex + 1;
      return { ...state, currentIndex: newIndex };
    case "INCREMENT_SCORE":
      const newScore: number = state.score + 1;
      return { ...state, score: newScore };
    case "FINISH_QUIZ":
      return { ...state, isFinished: true };
    case "RESET":
      localStorage.removeItem("quizState");
      return initScoreState;
    default:
      throw new Error("Undefined reducer action type.");
  }
};

export type UseScoreContextType = {
  state: ScoreStateType;
  dispatch: React.Dispatch<ScoreActionType>;
};

const ScoreContext = createContext<UseScoreContextType | null>(null);

type ChildrenType = { children?: ReactNode };

export const ScoreProvider = ({ children }: ChildrenType) => {
  const savedState: string | null = localStorage.getItem("quizState");

  const [state, dispatch] = useReducer(
    scoreReducer,
    savedState ? JSON.parse(savedState) : initScoreState,
  );

  useEffect(() => {
    if (state.subject) localStorage.setItem("quizState", JSON.stringify(state));
  }, [state]);

  return (
    <ScoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContext;
