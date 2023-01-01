'use client'

import { useState } from 'react'

type Props = {
  name: string
  attr?: string
  value?: string
}

const Input = ({ name, value }: Props) => {
  const [valueInput, setValueInput] = useState(value)
  return (
    <div className=" input-component flex pb-1 items-end relative  h-14 theme-4 rounded-md">
      <input
        placeholder="sssssssss"
        className="peer w-full mx-2 z-10 "
        type="text"
        onChange={(e) => {
          setValueInput(e.target.value)
        }}
        value={valueInput ?? ''}
      />
      <label className="input-component-label absolute pe  text-primary-1  left-2 text-2xl text-primary">
        {name} :
      </label>
      <div className="input-component-after"></div>
    </div>
  )
}

export default Input
