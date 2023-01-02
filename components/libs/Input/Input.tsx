import './input.scss'
import { useState } from 'react'

type Props = {
  name: string
  attr?: string
  value?: string
}

const Input = ({ name, value }: Props) => {
  const [valueInput, setValueInput] = useState(value)
  return (
    <div className="input-component theme-4">
      <input
        placeholder=" "
        className=""
        type="text"
        onChange={(e) => {
          setValueInput(e.target.value)
        }}
        value={valueInput ?? ''}
      />
      <label className="absolute  text-primary-1  left-2 text-2xl text-primary">
        {name} :
      </label>
      <div className="input-component-after "></div>
    </div>
  )
}

export default Input
