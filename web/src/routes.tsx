import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Feed from './pages/Feed'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Feed} path="/" exact/>
    </BrowserRouter>
  )
}

export default Routes
