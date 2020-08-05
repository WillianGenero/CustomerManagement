import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 30px;
  margin: 32px auto;
  box-sizing: border-box;
`

export const Apresentation = styled.h1`
  text-align: center;
  color: var(--title);

  font-size: 20px;
  padding: 20px 0;

  @media (min-width: 500px) {
    font-size: 26px;
  }

  @media (min-width: 750px) {
    font-size: 36px;
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  list-style: none;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
