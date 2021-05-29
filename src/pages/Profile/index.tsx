import React from 'react'
import { Row, Col, Button } from 'antd'
import { grey } from '@ant-design/colors'

import { useSelector } from 'store'
import { UIProfileHeader, UIAlbum, Flex, Text } from 'shared/components'
import { Author } from 'utils'
import { Link } from 'react-router-dom'
import { PlusOutlined } from '@ant-design/icons'

export function Profile() {
  const { albums, avatar, cover } = useSelector((state) => state.user)

  return (
    <Row gutter={[0, 20]}>
      <Col span={24}>
        <UIProfileHeader
          avatarImageUrl={avatar}
          coverImageUrl={cover}
          userName="Gabriel Silva"
          userEmail="gabrieldjs21@gmail.com"
        />
      </Col>
      <Col span={24}>
        <Flex justify="space-between">
          <Text type="secondary" fontWeight={400} color={grey[6]} size="24px">
            Meus álbuns
          </Text>
          <Link to="/me/create-album">
            <Button type="primary" icon={<PlusOutlined />}>
              Postar álbum
            </Button>
          </Link>
        </Flex>
      </Col>
      {albums.map((album, index) => (
        <Col span={24} key={index}>
          <UIAlbum album={album} author={Author} />
        </Col>
      ))}
    </Row>
  )
}
