import React, { ReactNode } from 'react'
import { Col, List, Menu, Row } from 'antd'
import { Flex } from '../Flex'
import { Text } from '../Text'

interface UIAlbumMenuItem {
  label?: string
  icon?: ReactNode
  onClick?: (albumId: number) => void
}

interface UIAlbumMenuProps {
  albumId: number
  items: UIAlbumMenuItem[]
}

export function UIAlbumMenu({ items, albumId }: UIAlbumMenuProps) {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      size="small"
      renderItem={(item) => (
        <Menu>
          <Menu.Item icon={item.icon} onClick={() => item.onClick?.(albumId)}>
            {item.label}
          </Menu.Item>
        </Menu>
      )}
    />
  )
}
