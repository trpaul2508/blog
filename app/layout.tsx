'use client'
import { useState } from 'react'
import { DefaultLayout } from '../components/layouts'
import './styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  return (
    <html lang="en">
      <body className={`${theme} theme-1 font-roboto `}>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
