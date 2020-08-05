import React from 'react'

import Customer from '../../Components/Customer'

import { Container, Apresentation, List } from './styles'

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
    </Container>
  )
}

export default Feed
