import React, { ReactNode, useContext } from 'react'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'

type Props = {
  children?: ReactNode
}

const TabletLayout = ({ children }: Props) => {
  const { isTablet } = useContext(SizeDisplayContext)
  return <>{isTablet && children}</>
}

export default TabletLayout
