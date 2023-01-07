import React, { ReactNode, useContext } from 'react'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'

type Props = {
  children: ReactNode
}

const DisplayLayout = ({ children }: Props) => {
  const { isMobile, isTablet, isDesktop, isTabletVsDesktop, isTabletVsMobile } =
    useContext(SizeDisplayContext)

  return {
    Mobile: <>{isMobile && children}</>,
    Tablet: <>{isTablet && children}</>,
    TabletVsMobile: <>{isTabletVsMobile && children}</>,
    Desktop: <>{isDesktop && children}</>,
    TabletVsDesktop: <>{isTabletVsDesktop && children}</>,
  }
}

export default DisplayLayout
