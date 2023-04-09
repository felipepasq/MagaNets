import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 2rem;
  gap: 1rem;
  padding: 0 2rem;
  span {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 900;

    :not(.arrow) {
      :hover {
        text-decoration: underline;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 0;
  }
`

export const BreadCrumbContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-wrap: 1;
  height: fit-content;
  .arrow {
    margin: 0 1rem;
  }
`
