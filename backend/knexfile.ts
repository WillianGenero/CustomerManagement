module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'customer_management',
      user: 'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`
    }
  },
}
