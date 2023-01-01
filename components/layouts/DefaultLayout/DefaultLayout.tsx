import React, { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap  ">
      <Nav />
      <Sidebar />
      <main className="h-full flex-1 ">{children}</main>
    </div>
  )
}

export default DefaultLayout
