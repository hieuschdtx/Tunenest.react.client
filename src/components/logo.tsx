import React from 'react'
import { Link } from 'react-router-dom'
import { twMerge } from 'tailwind-merge'

type LogoProps = {
  disabledLink?: boolean
  className?: string
  src: string
  to?: string
} & React.ComponentPropsWithoutRef<'img'>

const Logo = React.forwardRef<HTMLImageElement, LogoProps>(
  ({ disabledLink = false, className, src, to = '/', ...props }, ref) => {
    const logo = (
      <img
        ref={ref}
        srcSet={src}
        className="inline-block"
        alt="Logo"
        {...props}
      />
    )

    if (disabledLink) {
      return logo
    }

    return (
      <Link
        className={twMerge('block', className)}
        to={to}
      >
        {logo}
      </Link>
    )
  }
)

Logo.displayName = 'Logo'

export default Logo
