import React, { ReactNode } from 'react'
import 'config/style/global.css'

interface BaseAppProps {
  children?: ReactNode
}

export function BaseApp ({ children }: BaseAppProps) {
  return (
    <div className="App">
      {children}
    </div>
  )
}
