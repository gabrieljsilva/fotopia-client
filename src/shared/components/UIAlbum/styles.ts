import styled from 'styled-components'
import { breakpoints } from 'config/theme/breakpoints'

export const MasonryContainer = styled.div`
  column-count: 3;

  @media only screen and (min-width: ${breakpoints.sm}) {
    column-count: 4;
  }

  @media only screen and (min-width: ${breakpoints.lg}) {
    column-count: 6;
  }

  column-gap: 10px;
`

export const MasonryItem = styled.div`
  margin: 0;
  display: flex;
  margin-bottom: 10px;
  break-inside: avoid;
`
