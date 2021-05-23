import React, { ReactNode } from 'react'
import 'config/style/global.css'

import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'store'
interface BaseAppProps {
  children?: ReactNode
}

export function BaseApp({ children }: BaseAppProps) {
  return (
    <div>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </div>
  )
}
