import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Feed from './pages/Feed'
import NewCustomer from './pages/NewCustomer'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Feed} path="/" exact/>
      <Route component={NewCustomer} path="/customer" exact/>
    </BrowserRouter>
  )
}

export default Routes
