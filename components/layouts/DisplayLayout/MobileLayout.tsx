import React, { ReactNode, useContext } from 'react'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'

type Props = {
  children?: ReactNode
}

const MobileLayout = ({ children }: Props) => {
  const { isMobile } = useContext(SizeDisplayContext)
  return <>{isMobile && children}</>
}

export default MobileLayout
