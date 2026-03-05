import type { SubjectItemType } from "./SubjectItem";

let quizData: SubjectItemType[] = [];
  
const fetchSubjects = async () => {
    try {
      const response = await fetch("src/data/data.json");
      const data = await response.json();
      quizData = data.quizzes;
      console.log(quizData);
    } catch (err) {
      console.error(`Couldn't load data ${err}`);
    }
  };

fetchSubjects();

export const data = quizData;
