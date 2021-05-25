import React from 'react'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

import { Flex, UIAlbum } from 'shared/components'
import { Album, User } from 'types'

const mockAuthor: User = {
  id: 1,
  name: 'Gabriel Silva',
  email: 'gabrieldjs21@gmail.com',
  avatar:
    'https://images.pexels.com/photos/953457/pexels-photo-953457.jpeg?cs=srgb&dl=pexels-william-mattey-953457.jpg&fm=jpg'
}

const mockAlbum: Album = {
  id: '1',
  name: 'Retratos',
  images: []
}

export function Timeline() {
  return (
    <>
      <Flex justify="flex-end" margin="16px 0px 16px 0px">
        <Button type="primary" icon={<PlusOutlined />}>
          Postar álbum
        </Button>
      </Flex>
      <Flex
        minHeight="100%"
        direction="column"
        items="flex-start"
        justify="flex-start"
        flex="1">
        <UIAlbum author={mockAuthor} album={mockAlbum} />
      </Flex>
    </>
  )
}
