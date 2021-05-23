import styled from 'styled-components'

interface FlexProps {
  position?: 'relative' | 'absolute'
  direction?: 'row' | 'column',
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  items?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'
  minHeight?: string
  bgColor?: string
  padding?: string
  pt?: string
  pb?: string
  pl?: string
  pr?: string
  margin?: string
  zIndex?: number
}

export const Flex = styled.div<FlexProps>`
  position: ${({ position = 'initial' }) => position};
  z-index: ${({ zIndex = 0 }) => zIndex};
  
  /* Flex */
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ items = 'stretch' }) => items};


  /* SIZING */
  min-height: ${({ minHeight }) => minHeight || 'initial'};
  
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
