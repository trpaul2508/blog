'use client'
import Image from 'next/image'
import { Button, Input } from '../../libs'

type Props = {}
const Nav = ({}: Props) => {
  return (
    <div className="flex justify-between h-full items-center w-full theme-2  border-b border-primary-2 ">
      <div className="pl-4 flex items-end cursor-pointer">
        <Image
          src={require('../../../public/image/store.png')}
          // width={35}
          className="w-8 mr-2"
          alt=""
        />
        <h2 className="text-center h-auto">Điện Tử</h2>
      </div>
      <div className="">{/* <Input name="Tìm kiếm" value="" /> */}</div>
      <div className="change-theme">
        <Button />
      </div>
    </div>
  )
}

export default Nav
