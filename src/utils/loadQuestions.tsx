import type { QuestionType } from "../context/QuizContext";
import data from "../data/data.json";

const loadQuestions = (subject: string): QuestionType[] => {
  try {
    const questionsBySubject = data?.quizzes.find(
      (item) => item.title === subject,
    )?.questions;

    if (!questionsBySubject) {
      console.error(`No data found for: ${subject}`);
      return [];
    }

    return questionsBySubject;
  } catch (err) {
    console.log(`Coudn't load data ${err}.`);
    return [];
  }
};

export { loadQuestions };
