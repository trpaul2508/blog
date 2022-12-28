import Link from 'next/link'

type Props = {}

const Nav = ({}: Props) => {
  return (
    <div className="">
      <Link
        className="mr-5 text-red text-2xl hover:text-blue hover:underline"
        href={'/'}
      >
        Home
      </Link>
      <Link
        className="text-2xl text-red hover:text-blue hover:underline"
        href={'/news'}
      >
        news
      </Link>
    </div>
  )
}

export default Nav
