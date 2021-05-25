import styled from 'styled-components'

interface FlexProps {
  position?: 'relative' | 'absolute'
  direction?: 'row' | 'column'
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
  items?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse' | 'initial'

  /* HEIGHT */
  minHeight?: string
  height?: string

  /* WIDTH */
  width?: string
  maxWidth?: string

  bgColor?: string
  padding?: string
  pt?: string
  pb?: string
  pl?: string
  pr?: string
  margin?: string
  zIndex?: number
  flex?: string
}

export const Flex = styled.div<FlexProps>`
  position: ${({ position = 'initial' }) => position};
  z-index: ${({ zIndex = 0 }) => zIndex};

  /* Flex */
  flex: ${({ flex = 'initial' }) => flex};
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ items = 'stretch' }) => items};
  flex-wrap: ${({ wrap = 'stretch' }) => wrap};

  /* SIZING */
  min-height: ${({ minHeight }) => minHeight || 'initial'};
  height: ${({ height }) => height || 'initial'};

  /* WIDTH */
  width: ${({ width = 'initial' }) => width};
  max-width: ${({ maxWidth = 'initial' }) => maxWidth};

  /* MARGIN */
  margin: ${({ margin }) => margin || 'initial'};

  /* PADDING */
  padding: ${({ padding }) => padding || 'initial'};
  padding-top: ${({ pt }) => pt || 'initial'};
  padding-bottom: ${({ pb }) => pb || 'initial'};
  padding-left: ${({ pl }) => pl || 'initial'};
  padding-right: ${({ pr }) => pr || 'initial'};

  /* COLORING */
  background-color: ${({ bgColor = 'transparent' }) => bgColor};
`
