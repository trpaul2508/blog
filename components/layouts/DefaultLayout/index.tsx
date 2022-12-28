import '../../../styles/globals.scss'
import { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../SideBar'

type Props = {
  children: ReactNode
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>Default Layout</h1>
      <Nav />
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
