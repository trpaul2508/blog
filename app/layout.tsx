import { ReactNode } from 'react'
import DefaultLayout from '../components/layouts/DefaultLayout'

type Props = {
  children: ReactNode
}

const RootLayout = (props: Props) => {
  console.log(props.props.segmentPath)

  return (
    <html>
      <body>{props.children}</body>
    </html>
  )
}

export default RootLayout
