import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 20px;
  gap: 10px;

  span {
    font-size: 16px;
    font-family: ${({ theme }) => theme.fonts.text};
    font-weight: 900;
  }
`

export const BreadCrumbContainer = styled.div`
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-wrap: 1;
  height: fit-content;
  .arrow {
    margin: 0 1rem;
  }
`
