import { ReactNode } from 'react'
import Nav from '../Nav'
import Sidebar from '../Sidebar'

type Props = {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
    <div className="">
      <h1>DashboardLayout</h1>
      <Nav />
      <Sidebar />
      <div className="">{children}</div>
    </div>
  )
}

export default DashboardLayout
