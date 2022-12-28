import { DefaultLayout } from '../components/layouts'
import './styles/globals.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <DefaultLayout>{children}</DefaultLayout>
      </body>
    </html>
  )
}
