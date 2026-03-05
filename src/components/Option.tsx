import { type ReactNode } from 'react'

export type OptionType = string;

type OptionTypeProps = {
    letter: string,
    option: OptionType;
}

function Option({ letter, option }: OptionTypeProps): ReactNode {
    // console.log(option)
  return (
    <div className='p-4 flex gap-4 items-center sm:p-6 sm:gap-8'>
        <div className='w-10 h-10 bg-grey-50 rounded-lg text-grey-500 flex items-center justify-center sm:w-14 sm:h-14'>{letter}</div>
        <p>{option}</p>
    </div>
  )
}

export default Option;
