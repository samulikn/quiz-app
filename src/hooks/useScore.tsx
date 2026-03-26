import { useContext } from "react";
import ScoreContext from "../context/ScoreContext";

const useScore = () => {
  const context = useContext(ScoreContext);
  if (!context) throw new Error("useScore must be used withing ScoreProvider");
  return context;
};

export default useScore;
