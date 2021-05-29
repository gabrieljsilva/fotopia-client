import React from 'react'
import { Avatar } from 'antd'
import { grey } from '@ant-design/colors'

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
  return (
    <Flex pt="16px" pb="16px" direction="column">
      <ImageCoverContainer imageCoverUrl={coverImageUrl} />
      <Avatar
        style={{
          marginTop: '-50px',
          marginLeft: '50px'
        }}
        size={96}
        src={avatarImageUrl}
      />
      <Text size="16px" color={grey[8]} style={{ marginLeft: '50px' }}>
        {userName}
      </Text>
      <Text
        size="12px"
        type="secondary"
        color={grey[2]}
        style={{ marginLeft: '50px' }}>
        {userEmail}
      </Text>
    </Flex>
  )
}
