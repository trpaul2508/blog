import { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap h-full  overflow-hidden">
      <nav className="w-full h-12 ">
        <Nav />
      </nav>
      <menu className="w-56  border-r-primary-2 border-r">
        <Sidebar />
      </menu>

      <main className=" theme-3 flex-1 ">
        <div className="h-[calc(100%-3rem)] overflow-auto">
          <div className="h-[2000px]">{children}</div>
        </div>
      </main>
    </div>
  )
}

export default DefaultLayout
