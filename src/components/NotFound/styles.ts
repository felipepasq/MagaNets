import styled from 'styled-components'

export const NotFound = styled.h2`
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: 22px;
  padding: 0 2rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`
