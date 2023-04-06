import styled from 'styled-components'

export const CardList = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  justify-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-flow: dense;
`
