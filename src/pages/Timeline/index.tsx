import React from 'react'
import { Button, Row, Col } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSelector } from 'store'

import { Flex, UIAlbum } from 'shared/components'
import { Author } from 'utils'

export function Timeline() {
  const { albums } = useSelector((state) => state.albums)
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
        <Row gutter={[0, 20]}>
          {albums.map((album) => (
            <Col span={24} key={album.id}>
              <UIAlbum author={Author} album={album} />
            </Col>
          ))}
        </Row>
      </Flex>
    </>
  )
}
