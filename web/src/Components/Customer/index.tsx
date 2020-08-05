import React, { useState } from 'react';

import { Item, Label, AddressButton, DeleteButton, EditButton, EditIcon, TrashIcon, ArrowDownIcon, ArrowUpIcon, Address, Alert } from './styles';

const Customer: React.FC = () => {
  const [openAddress, setOpenAddress] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const data = {
    name: 'Willian Bordignon Genero',
    cpf: '000.000.000-00',
    phone: '(99) 9 99999-9999',
    email: 'contato@contato.com',
    approved: 0,
    address: [
      {
        id: 3,
        cep: '89805100',
        city: 'Chapecó',
        state: 'SC',
        district: 'Passo dos Fortes',
        street: 'Rua Visconde de Cairu',
        number: 310,
        complement: 'D, Apt 404',
        typeAddress: 'Residencial',
        customer_id: 3,
        main: true
      },
      {
        id: 4,
        cep: '89854000',
        city: 'Santiago do Sul',
        state: 'SC',
        district: 'Centro',
        street: 'Rua Angelo Lunedo',
        number: 310,
        complement: 'NA',
        typeAddress: 'Casa de Praia',
        customer_id: 3,
        main: false
      }
    ]
  }

  return (
    <Item>
      <Label>
        <strong>Nome: </strong>
        <span>{data.name}</span>
      </Label>
      <Label>
        <strong>CPF: </strong>
        <span>{data.cpf}</span>
      </Label>
      <Label>
        <strong>E-mail: </strong>
        <span>{data.email}</span>
      </Label>
      <Label>
        <strong>Telefone: </strong>
        <span>{data.phone}</span>
      </Label>

      {
        openAddress &&
        data.address.map((local, index) => (
          <Address
            key={index}
          >
            <hr />
            <h3>Endereço { local.main ? 'principal' : 'secundário' }</h3>
            <Label>
              <span>{local.street} - {local.number} {local.complement}</span>
            </Label>
            <Label>
              <span>{local.district}, {local.city} - {local.state}</span>
            </Label>
            <Label>
              <span>{local.cep} - {local.typeAddress}</span>
            </Label>
          </Address>
        ))
      }

      <AddressButton
        onClick={() => setOpenAddress(!openAddress)}
      >
        {
          openAddress
          ? <> Ver menos <ArrowUpIcon /> </>
          : <> Ver mais <ArrowDownIcon /> </>
        }
      </AddressButton>

      <EditButton>
        <EditIcon />
      </EditButton>

      <DeleteButton
        onClick={() => setOpenDelete(!openDelete)}
      >
        <TrashIcon />
      </DeleteButton>

      {
        openDelete &&
        <Alert>
          <span>Deseja mesmo apagar?</span>
          <div>
            <button onClick={() => setOpenDelete(false)}>Cancelar</button>
            <button>Sim</button>
          </div>
        </Alert>
      }
    </Item>
  );
}

export default Customer;
