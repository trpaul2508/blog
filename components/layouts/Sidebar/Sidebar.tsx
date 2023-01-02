'use client'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
    icon: 'storefront',
    name: 'Sản phẩm',
    path: '/product',
  },
  {
    icon: 'shopping_bag',
    name: 'Giỏ hàng',
    path: '/cart',
  },
  {
    icon: 'manage_accounts',
    name: 'Tài khoản',
    path: '/profile',
  },
  {
    icon: 'dashboard',
    name: 'Quản lý',
    path: '/dashboard',
  },
]

const Sidebar = ({}: Props) => {
  const routerPath = useRouter()
  return (
    <ul className="flex flex-col gap-4 p-2 theme-2 h-full border-opacity-50 border-">
      {items.map((item, index) => (
        <li key={index} className={``}>
          <Link
            className={`flex  items-center  theme-2 cursor-pointer p-2 text-2xl rounded-xl hover:theme-3`}
            href={item.path}
          >
            <span className="material-symbols-outlined mr-4">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
