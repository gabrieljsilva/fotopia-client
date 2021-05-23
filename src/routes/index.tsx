import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Home, NotFound } from 'pages'

export function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  )
}
