'use client'
import Image from 'next/image'
import { Button, Input } from '../../libs'

type Props = {}
const Nav = ({}: Props) => {
  return (
    <nav className="w-full">
      <div className="flex justify-between items-center h-20 w-full theme-2 border-b border-b-primary-1">
        <div className="p-4 flex items-end cursor-pointer">
          <Image
            src={require('../../../public/image/store.png')}
            // width={35}
            className={'w-10 mr-4'}
            alt=""
          />
          <h1 className="text-center h-auto">Điện Tử</h1>
        </div>
        <div className="">
          <Input name="Tìm kiếm" value="" />
        </div>
        <div className="change-theme">
          <Button />
        </div>
      </div>
    </nav>
  )
}

export default Nav
