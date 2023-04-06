import styled from 'styled-components'

interface ContainerProps {
  isFavorite: boolean
}

export const Container = styled.div<ContainerProps>`
  position: absolute;
  top: -0.7rem;
  left: -0.4rem;
  cursor: pointer;
  svg:first-of-type {
    transform: rotateX(180deg);
    width: 4.5rem;
    path {
      fill: #000;
    }
  }
  svg:last-of-type {
    width: 2.1rem;
    position: absolute;
    top: 0;
    left: 1.2rem;
    path {
      fill: ${({ theme, isFavorite }) =>
        isFavorite ? theme.colors.red : theme.colors.white};
    }
  }
`
