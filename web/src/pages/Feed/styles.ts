import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  padding: 0 30px;
  margin: 32px auto;
  box-sizing: border-box;
`

export const Apresentation = styled.div`
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

export const NewCustomer = styled(Link)`
  width: 25%;
  height: 60px;
  line-height: 60px;

  border-radius: 8px;
  background: var(--title);
  color: #FFF;

  font-size: 18px;
  font-weight: 700;

  display: inline-block;
  align-self: center;
  text-align: center;
  text-decoration: none;

  transition: filter 0.2s;

  position: fixed;
  bottom: 50px;
  left: 40%;

  :hover {
    opacity: 0.8;
  }
`
