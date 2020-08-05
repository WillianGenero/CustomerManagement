import express from 'express'

import CustomerController from './controllers/CustomersController'

const routes = express.Router()

routes.get('/customers', CustomerController.index)
routes.post('/customers', CustomerController.create)
routes.delete('/customers/:id', CustomerController.delete)

export default routes
