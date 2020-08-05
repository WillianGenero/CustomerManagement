import React, { useState } from 'react';

import { Item, Label, AddressButton, DeleteButton, EditButton, EditIcon, TrashIcon, ArrowDownIcon, ArrowUpIcon } from './styles';

const Customer: React.FC = () => {
  const [openAddress, setOpenAddress] = useState(false)

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
        typeAddress: 1,
        customer_id: 3
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
        typeAddress: 1,
        customer_id: 3
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
      <DeleteButton>
        <TrashIcon />
      </DeleteButton>
    </Item>
  );
}

export default Customer;
