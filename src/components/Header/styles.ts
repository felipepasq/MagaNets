import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Header = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: 136.6rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 15rem;
  padding: 2rem 0;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
    align-items: unset;
    padding: 4rem 2rem 0;
  }
`
export const Logo = styled.h1`
  font-weight: 900;
  font-size: 2.8rem;
  font-family: ${({ theme }) => theme.fonts.text};
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.03rem;
  margin: 0 auto;
  @media (min-width: 768px) {
    margin: 0;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.text};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.2rem;
      fill: #fff;
    }
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 0 2rem;

    p {
      font-size: 1.6rem;
    }
  }
`
