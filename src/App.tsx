import { Routes, Route } from "react-router-dom";
import Heading from "./components/Heading";
import { ThemeContextProvider } from "./context/ThemeContext";
import Content from "./components/Content";
import QuestionContainer from "./components/QuestionContainer";
import { QuizProvider } from "./context/QuizContext";
import Score from "./components/Score";
import { ScoreProvider } from "./context/ScoreContext";
import Layout from "./components/Layout";

function App() {
  return (
    <main
      className=""
    >
      <Layout>
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
      </Layout>
    </main>
  );
}

export default App;

// w-full h-full flex flex-col text-blue-900 dark:text-white sm:w-11/12 sm:mx-auto sm:pt-8 xl:w-10/12