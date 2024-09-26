import { useState } from 'react'
import { StarIcon } from './star-icon'

type StarRatingProps = {
  legend: string
  range?: number
}

export const InaccessibleStarRating = ({ legend, range = 5 }: StarRatingProps) => {
  const [rating, setRating] = useState<string>('0')

  return (
    <div>
      <span>{legend}</span>
      <div className='flex [&>.item:has(~.item:hover)]:scale-125 [&>.item:has(~.item:hover)]:text-indigo-700 [&>.item:has(~.item:hover)]:duration-200 dark:[&>.item:has(~.item:hover)]:text-indigo-500 [&>.item:hover]:scale-125 [&>.item:hover]:text-indigo-700 [&>.item:hover]:duration-200 dark:[&>.item:hover]:text-indigo-500'>
        {Array.from({ length: range }, (_, index) => {
          const starValue = (index + 1).toString()
          return (
            <Star
              key={starValue}
              onClick={() => setRating(starValue)}
              filled={+rating >= +starValue}
            />
          )
        })}
      </div>
    </div>
  )
}

type StarRadioButtonProps = {
  onClick: () => void
  filled: boolean
}

const Star = ({ onClick, filled = false }: StarRadioButtonProps) => {
  return (
    <div
      onClick={onClick}
      className='item text-3xl text-indigo-600 ring-black duration-500 ease-in-out dark:text-indigo-400 dark:ring-white [&:has(:focus-visible)]:ring'
    >
      <div className='flex h-11 w-11 cursor-pointer items-center justify-center'>
        <StarIcon className='text-3xl' filled={filled} />
      </div>
    </div>
  )
}
