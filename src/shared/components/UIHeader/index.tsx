import React from 'react'
import { Avatar, Input, Grid } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
import { grey } from '@ant-design/colors'

import { useSelector } from 'store'
import { Container, Flex, Text } from 'shared/components'

const { useBreakpoint } = Grid
const { Search } = Input

export function UIHeader() {
  const history = useHistory()
  const user = useSelector((state) => state.user)
  const screens = useBreakpoint()

  return (
    <Flex style={{ backgroundColor: 'white' }} items="center">
      <Container>
        <Flex style={{ height: '48px' }} justify="space-between">
          <img
            src="/images/fotopia_logo_horizontal.png"
            alt="logo"
            style={{ height: 'auto', cursor: 'pointer' }}
            onClick={() => history.push('/')}
          />

          {screens.md && (
            <Flex items="center">
              <Search placeholder="Pesquisar" style={{ width: 300 }} />
            </Flex>
          )}
          <Flex
            onClick={() => history.push('/me')}
            items="center"
            justify="center"
            style={{ cursor: 'pointer' }}>
            <Avatar
              src={user.avatar}
              shape="circle"
              size="large"
              icon={<UserOutlined />}
            />
            <Text
              fontWeight={400}
              color={grey[6]}
              style={{ paddingLeft: '10px' }}>
              {user.name}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
