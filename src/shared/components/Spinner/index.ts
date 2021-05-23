import styled from 'styled-components'

interface SpinnerProps {
  speed?: string
  direction?: 'left' | 'right'
}

export const Spinner = styled.div<SpinnerProps>`
  animation-name: ${({ direction = 'left' }) => direction};
  animation-duration: ${({ speed = '5000ms' }) => speed};
  animation-iteration-count: infinite;
  animation-timing-function: linear; 

  @keyframes left {
      from {
          transform:rotate(0deg);
      }
      to {
          transform:rotate(360deg);
      }
  }

  @keyframes right {
      from {
          transform:rotate(360deg);
      }
      to {
          transform:rotate(0deg);
      }
  }
`
