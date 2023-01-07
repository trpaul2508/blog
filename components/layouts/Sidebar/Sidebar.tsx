import Link from 'next/link'
import { useContext } from 'react'
import { Display } from '..'
import { CartContext } from '../../../context/CartContext'
import { Button } from '../../libs'

type Props = {}

type ItemNav = {
  icon: string
  name: string
  path: string
  mobile: boolean
}

const items: ItemNav[] = [
  {
    icon: 'home',
    name: 'Trang chủ',
    path: '/',
    mobile: true,
  },
  {
    icon: 'newspaper',
    name: 'Tin tức',
    path: '/news',
    mobile: true,
  },

  {
    icon: 'storefront',
    name: 'Sản phẩm',
    path: '/product',
    mobile: true,
  },
  {
    icon: 'contacts',
    name: 'Chúng tôi',
    path: '/contacts',
    mobile: true,
  },
  {
    icon: 'shopping_bag',
    name: 'Giỏ hàng',
    path: '/cart',
    mobile: true,
  },

  {
    icon: 'manage_accounts',
    name: 'Tài khoản',
    path: '/profile',
    mobile: false,
  },
  {
    icon: 'dashboard',
    name: 'Quản lý',
    path: '/dashboard',
    mobile: false,
  },
]

const ItemNave = ({ icon, path, name, qty }: ItemNav & { qty: number }) => {
  return (
    <li className="hover:theme-2 relative sm:h-full  ">
      <Link
        href={path}
        className="py-3 sm:p-0  hover:theme-4 pr-2 sm:pr-0 sm:w-12 h-full flex items-center  sm:justify-center  "
      >
        <Button
          handleClick={() => {}}
          icon={icon}
          className="sm:w-full  sm:h-full   flex-center"
        />
        <Display.TabletVsDesktopLayout>
          <span className="ml-4">{name}</span>
        </Display.TabletVsDesktopLayout>
        {path === '/cart' && (
          <span className="sm:text-xs sm:top-0 sm:left-0  sm:absolute ml-auto mr-2">
            {qty}
          </span>
        )}
      </Link>
    </li>
  )
}

const Sidebar = ({}: Props) => {
  const qty = useContext(CartContext)

  return (
    <>
      <ul className="flex  sm:gap-0  sm:flex-row  gap-4 flex-col sm:h-full  sm:justify-between  sm:items-center  text-2xl  w-full  ">
        {items.map((item, index) => {
          if (!item.mobile) {
            return (
              <Display.TabletVsDesktopLayout key={index}>
                {<ItemNave {...item} qty={qty?.[0] ?? 0} />}
              </Display.TabletVsDesktopLayout>
            )
          }
          return <ItemNave key={index} {...item} qty={qty?.[0] ?? 0} />
        })}
      </ul>
    </>
  )
}

export default Sidebar
