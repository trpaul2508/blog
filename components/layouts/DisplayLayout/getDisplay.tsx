import { useContext } from 'react'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'

export function GetDisplay() {
  const { isDesktop } = useContext(SizeDisplayContext)
  return <></>
}
