import React from 'react'
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled
} from '@ant-design/icons'

import { grey } from '@ant-design/colors'

import { Flex, Text } from 'shared/components'
import { Link } from 'react-router-dom'

export function UIFooter() {
  return (
    <Flex
      direction="column"
      justify="space-between"
      items="center"
      width="100%"
      margin="32px 0 32px 0"
      height="60px">
      <Flex width="200px" justify="space-between">
        <Text fontWeight={400} color={grey[4]}>
          Fotopia
        </Text>
        <Link to="/https://github.com/gabrieljsilva" style={{ color: grey[4] }}>
          <GithubFilled />
        </Link>
        <Link
          to="/https://www.linkedin.com/in/gabrieldjs21/"
          style={{ color: grey[4] }}>
          <LinkedinFilled />
        </Link>
        <Link
          to="/https://www.instagram.com/gabrieljsillva/"
          style={{ color: grey[4] }}>
          <InstagramFilled />
        </Link>
      </Flex>
      <Flex justify="center">
        <Text fontWeight={200} color={grey[4]}>
          Copyright ©2020
        </Text>
      </Flex>
    </Flex>
  )
}
