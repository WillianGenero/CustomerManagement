import { Request, Response } from 'express'
import knex from '../database/connection'
import connection from '../database/connection'

interface user {
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
    const users = await connection('customers').select('*')

    var user = users.map(async (user: user) => {
      const address = await connection('address')
        .where('customer_id', user.id)
        .select('*')
        .then(response => {
          return {
            ...user,
            address: response
          }
        })
      return response.json(address)
    })

    return response.status(200)
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
