import { useState } from 'react'
import { StarIcon } from './star-icon'

type StarRatingProps = {
  legend: string
}

export const StarRating = ({ legend }: StarRatingProps) => {
  const [rating, setRating] = useState<string>('0')

  return (
    <fieldset>
      <legend>{legend}</legend>
      <div className='flex [&>.item:has(~.item:hover)]:scale-110 [&>.item:hover]:scale-110'>
        <StarRadioButton
          value='1'
          id='star-1'
          checked={rating === '1'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
          filled={+rating >= 1}
        />
        <StarRadioButton
          value='2'
          id='star-2'
          checked={rating === '2'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
          filled={+rating >= 2}
        />
        <StarRadioButton
          value='3'
          id='star-3'
          checked={rating === '3'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
          filled={+rating >= 3}
        />
        <StarRadioButton
          value='4'
          id='star-4'
          checked={rating === '4'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
          filled={+rating >= 4}
        />
        <StarRadioButton
          value='5'
          id='star-5'
          checked={rating === '5'}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRating(e.target.value)}
          filled={+rating >= 5}
        />
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
    <div className='item text-3xl text-orange-600 duration-500 ease-in-out hover:duration-200'>
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
