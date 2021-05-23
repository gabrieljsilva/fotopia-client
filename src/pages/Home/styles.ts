import styled from 'styled-components'
import { Typography } from 'antd'
import { blue, grey } from '@ant-design/colors'

const { Title } = Typography

export const StyledTitle = styled(Title)`
  &&& {
    font-size: 96px;
    color: ${blue[4]};
    line-height: 112px;
    margin: 0;
    margin-top: 48px;
    background-color: transparent;
  }
`

export const StyledSubTitle = styled(Title)`
  &&& {
    font-size: 48px;
    color: ${grey[5]};
    line-height: 56px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 140px;
    background-color: transparent;
  }
`
