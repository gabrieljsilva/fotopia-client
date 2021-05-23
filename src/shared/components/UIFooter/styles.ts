import styled from 'styled-components'
import { Typography } from 'antd'

const { Text } = Typography

export const FooterTitle = styled(Text)`
  &&& {
    font-size: 18px;
    font-weight: 500;
    & > * {
      margin: 0px 20px 0px 20px;
    }
    line-height: 40px;
  }
`

export const FooterCopyRight = styled(Text)`
  &&& {
    font-size: 14px;
    font-weight: 400;
  }
`
