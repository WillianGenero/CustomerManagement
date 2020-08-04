import knex from 'knex'

const connection = knex({
  client: 'pg',
  connection: {
    database: 'customer_management',
    user: 'postgres',
    password: 'postgres'
  }
})

export default connection
