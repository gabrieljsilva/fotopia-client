import React from 'react'

import { LayoutProps } from 'types'
import { Container, UIFooter, UIHeader, Flex } from 'shared/components'

export function LoggedInLayout({ children }: LayoutProps) {
  return (
    <>
      <UIHeader />
      <Container>
        <Flex
          minHeight="calc(100vh - 48px)"
          direction="column"
          justify="space-between">
          {children}
          <UIFooter />
        </Flex>
      </Container>
    </>
  )
}
