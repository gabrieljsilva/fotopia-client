import React from 'react'
import { Layout } from 'antd'
import {
  GithubFilled,
  InstagramFilled,
  LinkedinFilled
} from '@ant-design/icons'

import { Flex } from 'shared/components'
import { FooterTitle, FooterCopyRight } from './styles'

const { Footer } = Layout

export function UIFooter() {
  return (
    <Footer>
      <Flex justify="center">
        <FooterTitle type="secondary">
          Fotopia
          <a
            href="https://github.com/gabrieljsilva"
            style={{ textDecoration: 'none' }}>
            <GithubFilled />
          </a>
          <a href="https://www.linkedin.com/in/gabrieldjs21/">
            <LinkedinFilled />
          </a>
          <a href="https://www.instagram.com/gabrieljsillva/">
            <InstagramFilled />
          </a>
        </FooterTitle>
      </Flex>
      <Flex justify="center">
        <FooterCopyRight type="secondary">Copyright ©2020</FooterCopyRight>
      </Flex>
    </Footer>
  )
}
