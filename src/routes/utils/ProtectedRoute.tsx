import React from 'react'
import { Route, RouteProps, Redirect } from 'react-router-dom'
import { useSelector } from 'store'

export function ProtectedRoute(props: RouteProps) {
  const user = useSelector((state) => state.user)

  if (!user.isLoggedIn) {
    return <Redirect to="/access" />
  }
  return <Route {...props} />
}
