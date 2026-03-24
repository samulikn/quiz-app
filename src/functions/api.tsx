 import type { QuestionType } from "../context/QuizContext";

 export type QuizDataType = {
   title: string;
   icon: string;
   questions: QuestionType[];
 };

 
const fetchQuizData = async(): Promise<QuizDataType[]> => {

    const response = await fetch("src/data/data.json");
    const data = await response.json();
    return data.quizzes;
  }

  const loadQuestions = async (subject: string | null) => {

    const storagedData = localStorage.getItem("quizState");
    const savedData = storagedData ? JSON.parse(storagedData) : null

      const quizSubject = savedData ? savedData.subject : subject;
  
      try {
        const data = await fetchQuizData();
        const questionsBySubject = data?.find((item) => item.title === quizSubject);
  
        if (!questionsBySubject) {
          console.error(`No data found for: ${quizSubject}`);
          return;
        }
        return questionsBySubject;
       
      } catch (err) {
        `Coudn't load data ${err}.`;
      }
    };
  

  export { loadQuestions }