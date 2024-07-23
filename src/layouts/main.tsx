import React from 'react'

type MainProps = {
  children: React.ReactNode
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <div>{children}</div>
}

Main.displayName = 'Main'

export default Main
