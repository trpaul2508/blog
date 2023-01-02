import React, { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap h-full overflow-hidden">
      <nav className="w-full ">
        <Nav />
      </nav>
      <menu className="w-56 h-full  ">
        <Sidebar />
      </menu>

      <main className=" flex-1 border-primary-1">{children}</main>
    </div>
  )
}

export default DefaultLayout
