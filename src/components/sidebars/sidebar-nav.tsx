import { MdLibraryMusic } from 'react-icons/md'
import { FaRegDotCircle } from 'react-icons/fa'
import { HiMiniArrowTopRightOnSquare } from 'react-icons/hi2'
import { LuPieChart } from 'react-icons/lu'

import { usePathname } from '@/hooks'
import { Box, Logo, SidebarListItem } from '@/components'

const dataNav = [
  {
    icon: MdLibraryMusic,
    label: 'Thư viện',
    path: '/thu-vien'
  },
  {
    icon: FaRegDotCircle,
    label: 'Khám phá',
    path: '/'
  },
  {
    icon: LuPieChart,
    label: 'Tunenest Chart',
    path: '/tunenest-chart'
  },
  {
    icon: HiMiniArrowTopRightOnSquare,
    label: 'Top 100',
    path: '/top-100'
  }
]

const SidebarNav = () => {
  const pathname = usePathname()

  return (
    <Box className="flex flex-col gap-y-5">
      <div className="px-4 py-2 w-full">
        <Logo
          src="/logo-short.png"
          to="/"
          width={175}
          className="inline-block p-2 hover:opacity-80 transition"
        />
      </div>
      <div>
        {dataNav.map((item, index) => {
          return (
            <SidebarListItem
              key={index}
              {...item}
              active={pathname === item.path}
            />
          )
        })}
      </div>
    </Box>
  )
}

SidebarNav.displayName = 'SidebarNav'

export default SidebarNav
