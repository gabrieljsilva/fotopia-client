import React from 'react'

import { LayoutProps } from 'types'

export function DefaultLayout ({ children }: LayoutProps) {
  return (
    <div>
      {children}
    </div>
  )
}
