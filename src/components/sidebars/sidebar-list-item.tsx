import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'
import Icon from '../icon'
import { IconType } from 'react-icons'

type SidebarListItemProps = {
  icon: IconType
  label: string
  path: string
  active: boolean
}

const SidebarListItem = React.forwardRef<HTMLAnchorElement, SidebarListItemProps>(
  ({ icon, label, path, active, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        to={path}
        className={twMerge(
          'flex flex-row h-auto w-full px-3 py-3 gap-x-4 items-start font-medium text-base text-neutral-400 hover:text-white transition',
          active && 'text-white border-l-4 border-l-green-500 bg-neutral-400 bg-opacity-20'
        )}
        {...props}
      >
        <Icon
          size={20}
          icon={icon}
          color=""
        />
        <span>{label}</span>
      </Link>
    )
  }
)

SidebarListItem.displayName = 'SidebarListItem'

export default SidebarListItem
