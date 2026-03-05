import type { ReactNode } from "react";
import { type QuizDataType } from "./Content";

const icons = import.meta.glob("../assets/images/*.svg", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

const bgColors: Record<string, string> = {
    "HTML": "bg-orange-50",
    "CSS": "bg-green-100",
    "JavaScript": "bg-blue-50",
    "Accessibility": "bg-purple-100"
}

export type SubjectItemType = {
  subject: QuizDataType;
};

function SubjectItem({ subject }: SubjectItemType): ReactNode {
    const icon = subject.title === "JavaScript" ? icons["../assets/images/icon-js.svg"] : icons[`../assets/images/icon-${subject.title.toLowerCase()}.svg`];
    const bgColor = bgColors[subject.title] ?? "bg-grey-50";
    const classes: string = [bgColor, "w-10 h-10 p-1.5 rounded-xl sm:w-14 sm:h-14"].join(" ");

    function getQuestions () {
        console.log(subject);
        const subjectData = subject.questions;
        console.log(subjectData)
    }

  return (
    <button type="button" onClick={() => {getQuestions()}}
            className="w-full p-4 flex gap-4 items-center text-lg font-medium bg-white dark:bg-blue-850 rounded-xl shadow-lg
                           sm:text-2xl sm:gap-8 sm:rounded-3xl lg:p-6">
      <img src={icon} alt={subject.title} className={classes} />
      {subject.title}
    </button>
  );
}

export default SubjectItem;
