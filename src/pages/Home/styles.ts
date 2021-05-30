import styled from 'styled-components'
import { Typography } from 'antd'
import { blue, grey } from '@ant-design/colors'

const { Title } = Typography

export const StyledTitle = styled(Title)`
  &&& {
    text-align: center;
    color: ${blue[4]};
    margin: 0;
    margin-top: 48px;
    background-color: transparent;
    font-size: 32px;
    @media (min-width: 576px) {
      font-size: 56px;
    }
    @media (min-width: 768px) {
      font-size: 72px;
    }
    @media (min-width: 992px) {
      font-size: 86px;
    }
    @media (min-width: 1200px) {
      font-size: 96px;
    }
  }
`

export const StyledSubTitle = styled(Title)`
  &&& {
    text-align: center;
    color: ${grey[5]};
    font-weight: 200;
    margin: 0;
    margin-bottom: 140px;
    background-color: transparent;
    font-size: 24px;
    @media (min-width: 576px) {
      font-size: 42px;
    }
    @media (min-width: 768px) {
      font-size: 48px;
    }
    @media (min-width: 992px) {
      font-size: 64px;
    }
    @media (min-width: 1200px) {
      font-size: 72px;
    }
  }
`

export const HomePageContainer = styled.div``
