import React from 'react'
import Header from './header'
import SideBar from './sidebar'
import Main from './main'

type AppLayoutProps = {
  children: React.ReactNode
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="p-2 flex h-full">
      <SideBar />
      <div>
        <Header></Header>
        <Main>{children}</Main>
      </div>
    </div>
  )
}

export default AppLayout
