import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('customers', table => {
    table.increments('id').primary()
    table.string('cpf').notNullable().unique()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('telefone').notNullable()
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('customers')
}
