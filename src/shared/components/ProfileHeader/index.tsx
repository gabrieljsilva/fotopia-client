import React from 'react'
import { Avatar, Button } from 'antd'
import { grey } from '@ant-design/colors'
import { useHistory } from 'react-router-dom'

import { ImageCoverContainer } from './styles'
import { Flex, Text } from 'shared/components'

interface UIProfileHeaderProps {
  coverImageUrl?: string
  avatarImageUrl?: string
  userName: string
  userEmail: string
}

export function UIProfileHeader({
  userEmail,
  userName,
  coverImageUrl,
  avatarImageUrl
}: UIProfileHeaderProps) {
  const history = useHistory()
  return (
    <Flex pt="16px" pb="16px" direction="column">
      <ImageCoverContainer imageCoverUrl={coverImageUrl} />
      <Flex justify="space-between" width="100%">
        <Avatar
          style={{
            marginTop: '-50px',
            marginLeft: '50px'
          }}
          size={96}
          src={avatarImageUrl}
        />

        <Button
          onClick={() => history.push('/me/edit')}
          style={{ padding: '0' }}
          type="link">
          Editar dados pessoais
        </Button>
      </Flex>
      <Text
        size="16px"
        fontWeight={400}
        color={grey[7]}
        style={{ marginLeft: '50px' }}>
        {userName}
      </Text>
      <Text
        size="12px"
        type="secondary"
        fontWeight={300}
        color={grey[2]}
        style={{ marginLeft: '50px' }}>
        {userEmail}
      </Text>
    </Flex>
  )
}
