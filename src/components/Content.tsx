import SubjectItem from "./SubjectItem";
import { type ReactNode } from "react";

const subjects: string[] = ["HTML", "CSS", "JavaScript", "Accessibility"];

function Content(): ReactNode {
  return (
    <div className="px-6 py-8 flex flex-col gap-9 xl:flex-row sm:gap-16 xl:gap-35 sm:px-8 sm:py-8 xl:px-5">
      <div className="flex flex-col gap-4 text-nowrap xl:gap-13">
        <div className="text-5xl flex flex-col gap-2 sm:text-6xl">
          <h2 className="font-light"> Welcome to the </h2>
          <h1 className="font-medium">Frontend Quiz!</h1>
        </div>
        <p className="text-grey-500 text-sm/6 italic dark:text-blue-300 sm:text-xl/6">
          Pick a subject to get started.
        </p>
      </div>
      <div className="xl:w-full">
        <ul className="flex flex-col gap-4 sm:gap-6 lg:gap-4">
          {subjects.map((subject: string) => (
            <li key={subject}>
              <SubjectItem subject={subject} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Content;
