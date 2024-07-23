import React from 'react'
import { twMerge } from 'tailwind-merge'

type boxProps = {
  children: React.ReactNode
  className?: string
  tag?: React.ElementType
}

const Box = React.forwardRef<HTMLElement, boxProps>(({ tag: Tag = 'div', children, className }, ref) => {
  return (
    <Tag
      className={twMerge('bg-neutral-800 h-fit rounded-md w-full', className)}
      ref={ref}
    >
      {children}
    </Tag>
  )
})

Box.displayName = 'Box'

export default Box
