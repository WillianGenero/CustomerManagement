import { Request, Response } from 'express'
import knex from '../database/connection'

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
    const user = await knex('customers').select('*')

    return response.json(user)
  },

  async create (request: Request, response: Response) {
    const { name, cpf, email, phone, addresses } = request.body

    const customer = {
      name, cpf, email, phone
    }

    const trx = await knex.transaction()

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
}

export default CustomersController
