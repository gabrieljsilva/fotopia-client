import styled from 'styled-components'
import { Typography } from 'antd'

interface TextProps {
  size?: string
  fontWeight?: number
  color?: string
  align?: 'left' | 'right' | 'center' | 'justify'
}

export const Text = styled(Typography.Text)<TextProps>`
  &&& {
    font-size: ${({ size = '14px' }) => size};
    font-weight: ${({ fontWeight = 500 }) => fontWeight};
    color: ${({ color = 'initial' }) => color};
    text-align: ${({ align = 'left' }) => align};
  }
`
