'use client'
import { createContext, ReactNode, useEffect, useState } from 'react'
import { isTablet } from 'react-device-detect'

type Props = {
  children: ReactNode
}

const sizeDisplays = [
  {
    name: 'mobile',
    size: { max: 600 },
  },
  {
    name: 'tablet',
    size: { min: 601, max: 1080 },
  },
  {
    name: 'desktop',
    size: { min: 1081 },
  },
]

const getSize = (size: number): string | undefined => {
  const displayObject = sizeDisplays.find((display) => {
    if (display.size.max && display.size.min) {
      return display.size.max >= size && size >= display.size.min
    }
    if (display.size.max && !display.size.min) {
      return display.size.max >= size
    }
    if (!display.size.max && display.size.min) {
      return display.size.min <= size
    }
  })
  return displayObject?.name
}

type ValueSizeDisplay = {
  isMobile?: boolean
  isTablet?: boolean
  isDesktop?: boolean
  isTabletVsDesktop?: boolean
  isTabletVsMobile?: boolean
}

const valueSizeDisplay = (display?: string): ValueSizeDisplay => {
  switch (display) {
    case 'mobile':
      return {
        isTabletVsMobile: true,
        isMobile: true,
      }
    case 'tablet':
      return {
        isTabletVsMobile: true,
        isTabletVsDesktop: true,
        isTablet: true,
      }

    case 'desktop':
      return {
        isTabletVsDesktop: true,
        isDesktop: true,
      }
    default:
      return {}
  }
}

export const SizeDisplayContext = createContext<ValueSizeDisplay>({})

export const SizeDisplayProvide = ({ children }: Props) => {
  const [display, setDisplay] = useState<string | undefined>(getSize(0))

  useEffect(() => {
    setDisplay(getSize(window.innerWidth))
    const handleResize = () => {
      setDisplay(getSize(window.innerWidth))
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [display])
  return (
    <SizeDisplayContext.Provider value={valueSizeDisplay(display)}>
      {children}
    </SizeDisplayContext.Provider>
  )
}

// export  {SizeDisplayProvide, SizeDisplayContext}
