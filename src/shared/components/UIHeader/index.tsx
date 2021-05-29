import React from 'react'
import { Avatar, Input } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'

import { useSelector } from 'store'
import { Container, Flex } from 'shared/components'
import { UserNameText } from './styled'

const { Search } = Input

export function UIHeader() {
  const history = useHistory()
  const user = useSelector((state) => state.user)

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
          <Flex items="center">
            <Search placeholder="Pesquisar" style={{ width: 300 }} />
          </Flex>
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
            <UserNameText> {user.name}</UserNameText>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
