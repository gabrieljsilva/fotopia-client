import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { routes } from './setupRoutes'
import { ProtectedRoute } from './utils/ProtectedRoute'

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ Page, Layout, path, isProtected }, index) => {
          return isProtected ? (
            <ProtectedRoute
              path={path}
              exact
              key={index}
              render={() => (
                <Layout>
                  <Page />
                </Layout>
              )}
            />
          ) : (
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
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}
