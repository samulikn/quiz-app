import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import { ThemeContextProvider } from "./context/ThemeContext";
import Content from "./components/Content";
import QuestionContainer from "./components/QuestionContainer";
import { QuizProvider } from "./context/QuizContext";
import Score from "./components/Score";
import { ScoreProvider } from "./context/ScoreContext";

function App() {
  return (
    <main
      className="w-full flex flex-col text-blue-900 dark:text-white sm:w-11/12 sm:mx-auto sm:pt-8
                      xl:w-10/12"
    >
      <ThemeContextProvider>
        <ScoreProvider>
          <Heading />
          <QuizProvider>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/quiz/:subject" element={<QuestionContainer />} />
              <Route path="/result" element={<Score />} />
            </Routes>
          </QuizProvider>
        </ScoreProvider>
      </ThemeContextProvider>
    </main>
  );
}

export default App;
