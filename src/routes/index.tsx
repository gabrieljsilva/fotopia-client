import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { routes } from './setupRoutes'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ Page, Layout, path }, index) => (
          <Route
            path={path}
            exact
            key={index}
            render={() => (
              <Layout>
                <Page />
              </Layout>
            )}
          />
        ))}
      </Switch>
    </BrowserRouter>
  )
}
