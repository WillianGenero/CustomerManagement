import { Request, Response } from 'express'
import knex from '../database/connection'

const CustomersController = {
  async index (request: Request, response: Response) {
    const user = await knex('customers').select('*')

    return response.json(user)
  },

  async create (request: Request, response: Response) {
    const { name, cpf, email, phone, cep, city, state, district, street, number, complement, typeAddress } = request.body

    const customer = {
      name, cpf, email, phone
    }

    const trx = await knex.transaction()

    const insertedId = await trx('customers').
      insert(customer).
      returning('id').
      catch((error) => {
        return response.json(error)
      })

    trx.commit()

    return response.json({ insertedId })
  }
}

export default CustomersController
