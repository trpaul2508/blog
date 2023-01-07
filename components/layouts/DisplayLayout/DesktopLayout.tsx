import React, { ReactNode, useContext } from 'react'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'

type Props = {
  children?: ReactNode
}

const DesktopLayout = ({ children }: Props) => {
  const { isDesktop } = useContext(SizeDisplayContext)
  return <>{isDesktop && children}</>
}

export default DesktopLayout
