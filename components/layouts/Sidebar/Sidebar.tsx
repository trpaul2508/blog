import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {}

type ItemNav = {
  icon: string
  name: string
  path: string
}

const items: ItemNav[] = [
  {
    icon: 'home',
    name: 'Trang chủ',
    path: '/',
  },
  {
    icon: 'newspaper',
    name: 'Tin tức',
    path: '/news',
  },
  {
    icon: 'shopping_bag',
    name: 'Giỏ hàng',
    path: '/cart',
  },
  {
    icon: 'storefront',
    name: 'Sản phẩm',
    path: '/product',
  },
  {
    icon: 'dashboard',
    name: 'Quản lý',
    path: '/dashboard',
  },
]

const Sidebar = ({}: Props) => {
  return (
    <menu className=" w-56 theme-2 border-r border-r-primary-1 border-b border-b-primary-1">
      <ul className="flex flex-col gap-4 p-2 ">
        {items.map((item, index) => (
          <li
            key={index}
            className={`flex  items-center cursor-pointer p-2 rounded-xl hover:theme-4`}
          >
            <span className="material-symbols-outlined  mr-4">{item.icon}</span>
            <Link className="text-2xl " href={item.path}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </menu>
  )
}

export default Sidebar
