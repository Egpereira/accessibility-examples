import { useState } from 'react'
import { StarIcon } from './star-icon'

type StarRatingProps = {
  legend: string
  range?: number
}

export const StarRating = ({ legend, range = 5 }: StarRatingProps) => {
  const [rating, setRating] = useState<string>('0')

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className='flex [&>.item:has(~.item:hover)]:scale-125 [&>.item:has(~.item:hover)]:text-indigo-700 [&>.item:has(~.item:hover)]:duration-200 dark:[&>.item:has(~.item:hover)]:text-indigo-500 [&>.item:hover]:scale-125 [&>.item:hover]:text-indigo-700 [&>.item:hover]:duration-200 dark:[&>.item:hover]:text-indigo-500'>
        {Array.from({ length: range }, (_, index) => {
          const starValue = (index + 1).toString()
          return (
            <StarRadioButton
              key={starValue}
              value={starValue}
              id={`star-${starValue}`}
              checked={rating === starValue}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
              filled={+rating >= +starValue}
            />
          )
        })}
      </div>
    </fieldset>
  )
}

type StarRadioButtonProps = {
  value: string
  id: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  filled: boolean
}

const StarRadioButton = ({
  value,
  id,
  checked,
  onChange,
  filled = false
}: StarRadioButtonProps) => {
  return (
    <div className='item text-3xl text-indigo-600 ring-black duration-500 ease-in-out dark:text-indigo-400 dark:ring-white [&:has(:focus-visible)]:ring'>
      <label htmlFor={id} className='flex h-11 w-11 cursor-pointer items-center justify-center'>
        <span className='sr-only'>
          {value}
          <input
            type='radio'
            name='rating'
            value={value}
            id={id}
            checked={checked}
            onChange={onChange}
          />
        </span>
        <StarIcon className='text-3xl' filled={filled} />
      </label>
    </div>
  )
}
