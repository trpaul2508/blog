import { MouseEvent } from 'react'

type ParamsClick = {
  e?: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  data?: any
}

export type HandleClickButton = ({ e, data }: ParamsClick) => void
