import Link from 'next/link'
import React from 'react'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div>
      <Link href={'/'}>Home</Link>
      <Link href={'/blog'}>Blog</Link>
    </div>
  )
}

export default Nav
