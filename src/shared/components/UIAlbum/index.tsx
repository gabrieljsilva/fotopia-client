import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Card, Avatar, Image, Button, Dropdown, Modal } from 'antd'
import { grey } from '@ant-design/colors'
import {
  EditOutlined,
  EllipsisOutlined,
  DeleteOutlined,
  EyeOutlined
} from '@ant-design/icons'

import { Album, User } from 'types'
import { Flex, Text, UIAlbumMenu, MasonaryImageGrid } from 'shared/components'

interface UIAlbumProps {
  album: Album
  author: User
}

export function UIAlbum({ album, author }: UIAlbumProps) {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  function handleDeleteAlbum(id: number) {
    alert('DELETANTO ALBUM' + id)
  }

  function handleItemClick(onClick?: () => void) {
    onClick?.()
    setMenuIsVisible(!menuIsVisible)
  }

  const history = useHistory()

  return (
    <Card
      style={{ width: '100%' }}
      actions={[
        <Button type="link" key="see more">
          Ver tudo...
        </Button>
      ]}>
      <Flex justify="space-between" pb="20px" style={{ position: 'relative' }}>
        <Flex>
          <Avatar src={author.avatar} size={64} />
          <Flex justify="center" direction="column" flex="1" pl="10px">
            <Text fontWeight={400}>{author.name}</Text>
            <Text fontWeight={300} color={grey[5]} size="12px">
              {author.email}
            </Text>
          </Flex>
        </Flex>

        <Dropdown
          visible={menuIsVisible}
          placement="bottomRight"
          overlay={
            <UIAlbumMenu
              albumId={album.id}
              items={[
                {
                  icon: <EyeOutlined key="eye" />,
                  label: 'ver mais',
                  onClick: (id) =>
                    handleItemClick(() => history.push(`/album/${id}`))
                },
                {
                  icon: <EditOutlined key="edit" />,
                  label: 'editar',
                  onClick: (id) =>
                    handleItemClick(() => history.push(`/album/${id}/edit`))
                },
                {
                  icon: <DeleteOutlined key="setting" />,
                  label: 'apagar',
                  onClick: (id) =>
                    handleItemClick(() =>
                      Modal.confirm({
                        title: 'Tem certeza que deseja apagar este ??lbum?',
                        okText: 'Confirmar',
                        cancelText: 'Cancelar',
                        onOk: () => handleDeleteAlbum(id)
                      })
                    )
                }
              ]}
            />
          }>
          <Flex direction="column" justify="center">
            <EllipsisOutlined
              style={{ transform: 'rotate(90deg)', cursor: 'pointer' }}
              key="ellipsis"
              onClick={() => handleItemClick()}
            />
          </Flex>
        </Dropdown>
      </Flex>
      <MasonaryImageGrid images={album.images} />
    </Card>
  )
}
