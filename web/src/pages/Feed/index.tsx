import React from 'react'

import Customer from '../../Components/Customer'

import { Container, Apresentation, List } from './styles'

const Feed: React.FC = () => {

  return (
    <Container>
      <Apresentation>
        Olá Maria, seja bem vinda novamente!
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
