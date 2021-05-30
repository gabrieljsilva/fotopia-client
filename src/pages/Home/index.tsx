import React from 'react'
import { Button } from 'antd'
import { Link } from 'react-router-dom'

import { Flex, Spinner } from 'shared/components'
import { StyledTitle, StyledSubTitle } from './styles'

export function Home() {
  return (
    <Flex justify="center" items="center" minHeight="100vh">
      <Flex direction="column" justify="center" items="center">
        <img src="/images/fotopia_logo_vertical.png" alt="logo fotopia" />
        <StyledTitle>Capture momentos</StyledTitle>
        <StyledSubTitle>Guarde lembranças</StyledSubTitle>
        <Flex>
          <Button type="link">Ver fotos</Button>
          <Link to="/access">
            <Button type="primary">Começar agora</Button>
          </Link>
        </Flex>
      </Flex>
      {/* ROTATING ICONS */}
      {/* <Flex
        zIndex={0}
        position="absolute"
        style={{ left: '140px', top: '220px' }}>
        <Spinner direction="left">
          <img src="/images/piont_erection.svg" alt="piont" />
        </Spinner>
      </Flex>
      <Flex
        zIndex={0}
        position="absolute"
        style={{ left: '360px', top: '220px' }}>
        <img src="/images/correlation.svg" alt="piont" />
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ left: '140px', bottom: '380px' }}>
        <Spinner direction="right">
          <img src="/images/point-line.svg" alt="piont" />
        </Spinner>
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ left: '300px', bottom: '320px' }}>
        <img src="/images/white_arrow.svg" alt="piont" />
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ left: '500px', bottom: '300px' }}>
        <Spinner direction="left">
          <img src="/images/rectangle_with_circle_vertex.svg" alt="piont" />
        </Spinner>
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ right: '320px', bottom: '320px' }}>
        <Spinner direction="right">
          <img src="/images/cellular_structure.svg" alt="piont" />
        </Spinner>
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ right: '100px', bottom: '360px' }}>
        <Spinner direction="left">
          <img src="/images/point-line_structure.svg" alt="piont" />
        </Spinner>
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ right: '180px', top: '220px' }}>
        <img src="/images/linearity_ripple.svg" alt="piont" />
      </Flex>

      <Flex
        zIndex={0}
        position="absolute"
        style={{ right: '340px', top: '200px' }}>
        <Spinner direction="left">
          <img src="/images/rhombus_collection.svg" alt="piont" />
        </Spinner>
      </Flex> */}
    </Flex>
  )
}
