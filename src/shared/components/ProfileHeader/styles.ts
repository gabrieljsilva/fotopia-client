import styled from 'styled-components'

interface ImageCoverContainerProps {
  imageCoverUrl?: string
}

export const ImageCoverContainer = styled.div<ImageCoverContainerProps>`
  height: 200px;
  width: 100%;
  position: relative;
  background-image: url(${({ imageCoverUrl }) => imageCoverUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  box-shadow: inset -1px 0px 0px #d9d9d9, inset 0px 1px 0px #d9d9d9,
    inset 0px -1px 0px #d9d9d9;
`
