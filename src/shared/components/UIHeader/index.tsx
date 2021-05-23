import React from 'react'
import { Menu, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { grey } from '@ant-design/colors'

import { Container, Flex } from 'shared/components'

import { UserNameText } from './styled'

export function UIHeader() {
  return (
    <Flex style={{ backgroundColor: 'white' }} items="center">
      <Container>
        <Flex style={{ height: '48px' }} justify="space-between">
          <img
            src="/images/fotopia_logo_horizontal.png"
            alt="logo"
            style={{ height: 'auto' }}
          />
          <Flex items="center" justify="center">
            <Avatar shape="circle" size="large" icon={<UserOutlined />} />
            <UserNameText>Gabriel Silva</UserNameText>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
