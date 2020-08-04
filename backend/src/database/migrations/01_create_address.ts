import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('address', table => {
    table.increments('id').primary()
    table.string('cep').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('district').notNullable()
    table.string('street').notNullable()
    table.integer('number').notNullable()
    table.string('complement').notNullable()
    table.integer('typeAddress').notNullable()

    table.integer('customer_id')
      .references('customers.id')
      .notNullable()
      .onDelete('CASCADE')
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('address')
}
