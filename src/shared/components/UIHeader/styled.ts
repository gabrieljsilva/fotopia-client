import { Typography } from 'antd'
import styled from 'styled-components'

const { Text } = Typography

export const UserNameText = styled(Text)`
  &&& {
    font-size: 16px;
    font-weight: 500;
    padding-left: 10px;
    color: black;
  }
`
