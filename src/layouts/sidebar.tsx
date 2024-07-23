import { Box, SidebarNav } from '@/components'
import React from 'react'

const SideBar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col gap-2 h-full w-sidebar-width">
      <SidebarNav />
      <Box className="h-full p-4 overflow-y-auto">Gernes Famus</Box>
    </div>
  )
}

SideBar.displayName = 'SideBar'

export default SideBar
