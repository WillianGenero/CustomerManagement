import React from 'react'

import Customer from '../../Components/Customer'

import { Container, Apresentation, List, NewCustomer } from './styles'

const Feed: React.FC = () => {

  return (
    <Container>
      <Apresentation>
        <strong>Olá Maria, seja bem vinda novamente!</strong><br />
        <span>Confira seus clientes</span>
      </Apresentation>

      <List>
        <Customer />
        <Customer />
        <Customer />
      </List>

      <NewCustomer to='/customer'>Cadastrar novo cliente</NewCustomer>
    </Container>
  )
}

export default Feed
