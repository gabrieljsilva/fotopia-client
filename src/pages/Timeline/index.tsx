import React from 'react'
import { Button, Row, Col, Input, Grid } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useSelector } from 'store'
import { Link } from 'react-router-dom'

import { Flex, UIAlbum } from 'shared/components'
import { Author } from 'utils'

const { useBreakpoint } = Grid
const { Search } = Input

export function Timeline() {
  const screens = useBreakpoint()

  const { albums } = useSelector((state) => state.albums)
  return (
    <>
      <Flex justify="space-between" margin="16px 0px 16px 0px">
        {!screens.md ? (
          <Flex items="center">
            <Search placeholder="Pesquisar" />
          </Flex>
        ) : (
          <div></div>
        )}

        <Link to="/me/create-album">
          <Button type="primary" icon={<PlusOutlined />}>
            {screens.sm ? 'Postar álbum' : ''}
          </Button>
        </Link>
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
