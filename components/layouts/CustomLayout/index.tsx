import '../../../styles/globals.scss'
import { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../SideBar'

type Props = {
  children: ReactNode
}

const CustomLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>Custom Layout</h1>
      <Nav />
      <main>{children}</main>
      <Sidebar />
    </div>
  )
}

export default CustomLayout
