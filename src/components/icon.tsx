import React from 'react'
import { IconType } from 'react-icons'

type IconProps = {
  icon: IconType
  size?: number
  color?: string
}

const Icon: React.FC<IconProps> = ({ icon: IconComponent, size = 24, color = 'black', ...props }) => {
  return (
    <IconComponent
      size={size}
      color={color}
      {...props}
    />
  )
}

Icon.displayName = 'Icon'

export default Icon
