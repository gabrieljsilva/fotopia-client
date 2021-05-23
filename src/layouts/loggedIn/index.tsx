import React from 'react'

import { LayoutProps } from 'types'
import { Container, UIFooter, Flex } from 'shared/components'

export function LoggedInLayout({ children }: LayoutProps) {
  return (
    <>
      <Container>
        <Flex minHeight="100vh" direction="column" justify="space-between">
          {children}
          <UIFooter />
        </Flex>
      </Container>
    </>
  )
}
