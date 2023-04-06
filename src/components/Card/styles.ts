import styled from 'styled-components'

export const Container = styled.div`
  height: 40rem;
  box-shadow: 0 0.2rem 1rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid #e3e3e3;
  max-width: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  .delete {
    svg {
      width: 2.8rem;
      position: absolute;
      top: 0;
      right: 0.1rem;
      height: auto;
    }
  }
`

export const ProductTitle = styled.p`
  font-size: 1.8rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.text};
  position: absolute;
  top: 23rem;
`
export const ProductPrice = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.text};
  color: #f4e79c;
  margin-top: 1rem;
`
