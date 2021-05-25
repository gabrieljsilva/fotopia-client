import React from 'react'
import { Card, Avatar, Image, Button } from 'antd'
import { grey } from '@ant-design/colors'

import { Album, User } from 'types'
import { Flex, Text } from 'shared/components'

import { MasonryContainer, MasonryItem } from './styles'
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined
} from '@ant-design/icons'

interface UIAlbumProps {
  album: Album
  author: User
}

const images = [
  'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg',
  'https://images.pexels.com/photos/6331533/pexels-photo-6331533.jpeg?cs=srgb&dl=pexels-%C4%91%C3%A0ng-thi%E1%BB%87n-thanh-t%C3%A0i-6331533.jpg&fm=jpg',
  'https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?cs=srgb&dl=pexels-simon-berger-931881.jpg&fm=jpg',
  'https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg?cs=srgb&dl=pexels-mouad-mabrouk-3689859.jpg&fm=jpg',
  'https://images.pexels.com/photos/3946868/pexels-photo-3946868.jpeg?cs=srgb&dl=pexels-%C3%B3mk%C3%A3r-%C3%B1a%C3%ADdu-3946868.jpg&fm=jpg',
  'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?cs=srgb&dl=pexels-kyle-loftus-3379942.jpg&fm=jpg',
  'https://images.pexels.com/photos/3820766/pexels-photo-3820766.jpeg?cs=srgb&dl=pexels-kon-karampelas-3820766.jpg&fm=jpg',
  'https://images.pexels.com/photos/2953898/pexels-photo-2953898.jpeg?cs=srgb&dl=pexels-zachary-debottis-2953898.jpg&fm=jpg',
  'https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422970.jpg&fm=jpg',
  'https://images.pexels.com/photos/3660892/pexels-photo-3660892.jpeg?cs=srgb&dl=pexels-dave-ang-3660892.jpg&fm=jpg',
  'https://images.pexels.com/photos/3946868/pexels-photo-3946868.jpeg?cs=srgb&dl=pexels-%C3%B3mk%C3%A3r-%C3%B1a%C3%ADdu-3946868.jpg&fm=jpg',
  'https://images.pexels.com/photos/3379942/pexels-photo-3379942.jpeg?cs=srgb&dl=pexels-kyle-loftus-3379942.jpg&fm=jpg',
  'https://images.pexels.com/photos/3820766/pexels-photo-3820766.jpeg?cs=srgb&dl=pexels-kon-karampelas-3820766.jpg&fm=jpg',
  'https://images.pexels.com/photos/2953898/pexels-photo-2953898.jpeg?cs=srgb&dl=pexels-zachary-debottis-2953898.jpg&fm=jpg',
  'https://images.pexels.com/photos/2422970/pexels-photo-2422970.jpeg?cs=srgb&dl=pexels-jeremy-bishop-2422970.jpg&fm=jpg',
  'https://images.pexels.com/photos/3660892/pexels-photo-3660892.jpeg?cs=srgb&dl=pexels-dave-ang-3660892.jpg&fm=jpg'
]

export function UIAlbum({ album, author }: UIAlbumProps) {
  return (
    <Card
      style={{ width: '100%' }}
      actions={[
        <DeleteOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <Button type="link" key="see more">
          Ver tudo...
        </Button>
      ]}>
      <Flex justify="space-between" pb="20px">
        <Flex>
          <Avatar src={author.avatar} size={64} />
          <Flex justify="center" direction="column" flex="1" pl="10px">
            <Text>{author.name}</Text>
            <Text color={grey[5]} size="12px">
              {author.email}
            </Text>
          </Flex>
        </Flex>

        <Flex justify="space-between">
          <Flex direction="column">
            <EllipsisOutlined
              style={{ transform: 'rotate(90deg)', cursor: 'pointer' }}
              key="ellipsis"
            />
          </Flex>
        </Flex>
      </Flex>
      <MasonryContainer>
        {images.map((image, index) => (
          <MasonryItem key={index}>
            <Image src={image} style={{ borderRadius: '4px' }} />
          </MasonryItem>
        ))}
      </MasonryContainer>

      {/*  */}
    </Card>
  )
}

/**
 * Para testar: adicionar altura do container fixo e as imagens tamanho relativo
 */
