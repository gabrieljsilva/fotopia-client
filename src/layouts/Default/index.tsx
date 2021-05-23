import React from 'react'

import { LayoutProps } from 'types'
import { Container } from 'shared/components'

export function DefaultLayout({ children }: LayoutProps) {
  return <Container>{children}</Container>
}
