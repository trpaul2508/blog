import './input.scss'
import { useState } from 'react'

type Props = {
  name: string
  attr?: string
  value?: string
  className?: string
}

const Input = ({ name, value, className }: Props) => {
  const [valueInput, setValueInput] = useState(value)
  return (
    <div
      className={
        'input-component h-12 flex pb-1 items-end relative theme-4 overflow-hidden rounded-t-md' +
        className
      }
    >
      <input
        placeholder=" "
        className="w-full z-10 outline-none bg-transparent opacity-0 transition-all mx-4"
        type="text"
        onChange={(e) => {
          setValueInput(e.target.value)
        }}
        value={valueInput ?? ''}
      />
      <label className="top-2  opacity-100 font-bold  transition-all absolute  text-primary-1 text-2xl text-primary left-4">
        {name} :
      </label>
      <div className="input-component-after "></div>
    </div>
  )
}

export default Input
