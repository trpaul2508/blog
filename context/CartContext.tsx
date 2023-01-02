'use client'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from 'react'

type Props = {
  children: ReactNode
}
const CartContext = createContext<
  [number, Dispatch<SetStateAction<number>>] | undefined
>(undefined)

const CartProvider = ({ children }: Props) => {
  const qty = useState<number>(1)

  return <CartContext.Provider value={qty}>{children}</CartContext.Provider>
}

export { CartProvider, CartContext }
