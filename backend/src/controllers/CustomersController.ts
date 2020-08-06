import { Request, Response } from 'express'
import knex from '../database/connection'
import connection from '../database/connection'

interface user {
  state: string,
  district: string,
  street: string,
  number: number,
  complement: string,
  typeAddress: number,
  city: string,
  id: number,
  name: string,
  cpf: string,
  cep: string,
  phone: string,
  approved: number,
}

interface address {
  cep: string,
  city: string,
  state: string,
  district: string,
  street: string,
  number: number,
  complement: string,
  type: number,
}

const CustomersController = {
  async index (request: Request, response: Response) {
    const customers = await connection('customers')
      .join('address', 'customers.id', '=', 'address.customer_id')
      .select('customers.*',
        'address.cep',
        'address.city',
        'address.state',
        'address.district',
        'address.street',
        'address.number',
        'address.complement',
        'address.typeAddress')

        const users_ids = [...new Set(customers.map(user_address => user_address.id))]

        const users = []

        users_ids.forEach(user_id => {
          const addresses = customers.filter(user_address => user_address.id === user_id)

          users.push({
            ...addresses[0],
            addresses
          })
        })

    return response.json(users)
  },

  async create (request: Request, response: Response) {
    const { name, cpf, email, phone, addresses } = request.body

    const customer = {
      name, cpf, email, phone
    }

    const trx = await connection.transaction()

    const customer_id = await trx('customers')
      .insert(customer)
      .returning('id')
      .then(resp => {
        addresses.map(async (address: address) => {
          const local = {
            cep: address.cep,
            city: address.city,
            state: address.state,
            district: address.district,
            street: address.street,
            number: address.number,
            complement: address.complement,
            typeAddress: address.type,
            customer_id: resp[0],
          }
          await knex('address')
            .insert(local)
            .catch((error) => {
              trx.rollback()
              return response.status(400).json(error)
            })
        })
        trx.commit()
      })
      .catch((error) => {
        trx.rollback()
        return response.status(400).json(error)
      })

    return response.json({ customer_id })
  },

  async delete (request: Request, response: Response) {
    const { id } = request.params

    await connection('customers')
      .where('id', id)
      .delete()
      .then(() => {
        return response.status(200).json({ message: 'Success' })
      })
      .catch(error => {
        return response.status(400).json(error)
      })
  }
}

export default CustomersController
