import Box from '@/components/box'
import SidebarNav from '@/components/sidebars/sidebar-nav'

const SideBar = () => {
  return (
    <div className="hidden md:flex flex-col gap-2 h-full w-sidebar-width">
      <SidebarNav />
      <Box className="h-full p-4 overflow-y-auto">Gernes Famus</Box>
    </div>
  )
}

export default SideBar
