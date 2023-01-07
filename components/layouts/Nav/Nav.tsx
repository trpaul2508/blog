'use client'
import Image from 'next/image'
import { Display } from '..'
import { Button } from '../../libs'
import { HandleClickButton } from '../../libs/types/HandleClickButton'

type Props = {}
const Nav = ({}: Props) => {
  const onLogin: HandleClickButton = () => {}
  const onLogout: HandleClickButton = () => {}

  return (
    <div className="text-base flex items-center justify-between  h-full w-full">
      <div className="flex theme-4 w-56 sm:w-auto h-8 sm:rounded-none sm:h-full overflow-hidden  border sm:bg-transparent rounded-3xl border-primary-2 sm:border-none border-opacity-0 focus-within:border-opacity-70">
        <input placeholder="search " className=" w-48 sm:none" />
        <Button
          handleClick={() => {}}
          icon="search"
          className="bg-primary-2 text-2xl   ml-auto flex-center w-8 sm:w-12  sm:bg-transparent"
          // loading
        />
      </div>
      <div className=" flex items-end cursor-pointer ">
        <Image
          src={require('../../../public/image/store.png')}
          className="w-10  mr-2 sm:w-8"
          alt=""
        />
        <h2 className="sm:text-2xl ">Điện Tử</h2>
      </div>

      <div className="flex gap-4 items-center ">
        <Display.TabletVsDesktopLayout>
          <Button
            handleClick={onLogin}
            data={'ok'}
            className=""
            text="Đăng Nhập"
          />
        </Display.TabletVsDesktopLayout>
        <Display.TabletVsDesktopLayout>
          <Button
            handleClick={onLogout}
            className=""
            data={'ok'}
            text="Thoát"
          />
        </Display.TabletVsDesktopLayout>
        <div className="h-12 w-12  flex-center">
          <Image
            className="w-10 sm:w-6 rounded-full cursor-pointer"
            alt=""
            src={require('../../../public/image/avatar/avatar-1.jpg')}
          />
        </div>
      </div>
    </div>
  )
}

export default Nav
