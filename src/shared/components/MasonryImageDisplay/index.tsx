import React from 'react'
import { Image } from 'antd'
import { Image as ImageType } from 'types'

import { MasonryContainer, MasonryItem } from './styles'

interface MasonryImageGrid {
  images: ImageType[]
}

export function MasonaryImageGrid({ images }: MasonryImageGrid) {
  return (
    <MasonryContainer>
      {images.map(({ url }, index) => (
        <MasonryItem key={index}>
          <Image src={url} style={{ borderRadius: '4px' }} />
        </MasonryItem>
      ))}
    </MasonryContainer>
  )
}
