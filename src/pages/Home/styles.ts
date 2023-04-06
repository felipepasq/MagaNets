import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
