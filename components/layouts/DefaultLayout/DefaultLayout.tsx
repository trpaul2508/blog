import React, { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Default Layout</h1>
      <Nav />
      <Sidebar />
      <div className="">{children}</div>
    </div>
  )
}

export default DefaultLayout
