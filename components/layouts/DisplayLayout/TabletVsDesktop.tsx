import React, { ReactNode, useContext } from 'react'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'

type Props = {
  children?: ReactNode
}

const TabletVsDesktopLayout = ({ children }: Props) => {
  const { isTabletVsDesktop } = useContext(SizeDisplayContext)
  // console.log(isTabletVsMobile)
  return <>{isTabletVsDesktop && children}</>
}

export default TabletVsDesktopLayout
