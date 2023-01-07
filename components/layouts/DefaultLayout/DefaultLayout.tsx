import { ReactNode, useContext } from 'react'
import { Display } from '..'
import { SizeDisplayContext } from '../../../context/SizeDisplayContext'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  const display = useContext(SizeDisplayContext)

  switch (display) {
    default:
      return (
        <>
          <div className="flex flex-wrap w-full overflow-hidden h-screen sm:flex-row  text-base sm:text-sm sm:h-[calc(100vh-7rem)] sm:fixed sm:overflow-auto ">
            <nav className="w-full theme-3 border-b border-primary-2 h-14 sm:h-12">
              <Nav />
            </nav>
            <menu className="  border-r-primary-2 w-56 theme-3 border-r sm:border-r-primary-2 sm:w-full sm:border-t sm:border-r-0 sm:border-t-primary-2 sm:fixed sm:bottom-0  sm:h-12">
              <Sidebar />
              {/* <hr /> */}
            </menu>
            <main className="w-full flex-1 overflow-auto sm:overflow-visible sm:h-full  h-[calc(100%-3.5rem)]">
              {children}
            </main>
          </div>
        </>
      )
  }
}

export default DefaultLayout
