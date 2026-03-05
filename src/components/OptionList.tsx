import { useState, type ReactNode } from "react";
import type { OptionType } from "./Option";
import Option from "./Option";

type OptionsTypeProp = {
  options: OptionType[];
};

function OptionList({ options }: OptionsTypeProp): ReactNode {
  const [errorMsg, setErrorMsg] = useState<string>("Please select an answer");

  return (
    <div className="basis-1/2 shrink-0 flex flex-col gap-4 text-lg font-medium sm:text-2xl xl:pl-3 xl:gap-9">
      <ul className="flex flex-col gap-4">
        {options.map((option, index) => {
          const letter = String.fromCharCode(65 + index);
          return (
            <li key={letter} className="bg-white rounded-xl dark:bg-blue-850 shadow-md sm:rounded-3xl">
              <Option letter={letter} option={option} />
            </li>
          );
        })}
      </ul>
        <button type="submit" className="p-4 bg-purple-500 rounded-xl text-white hover:bg-purple-600 shadow-md sm:p-6 sm:rounded-3xl">Submit Answer</button>
      <p className="text-red-500 text-center text-base">{errorMsg}</p>
    </div>
  );
}

export default OptionList;
