import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 0 2rem;
  position: relative;
  display: flex;
  width: 100%;
  input {
    width: 100%;
    height: 4rem;
    font-size: 1.6rem;
    padding-left: 3.5rem;
    border-radius: 0.4rem;
    border: 0;
    font-family: ${({ theme }) => theme.fonts.text};
  }

  svg {
    position: absolute;
    left: 1.5rem;
    top: 0.7rem;
    height: 2.5rem;
  }
`
