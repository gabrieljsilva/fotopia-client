import { AppRoute } from 'types'

import { DefaultLayout } from 'layouts'

import { Home, Register, NotFound } from 'pages'

export const routes: AppRoute[] = [
  {
    path: '/',
    Page: Home,
    Layout: DefaultLayout
  },
  {
    path: '/register',
    Page: Register,
    Layout: DefaultLayout
  },
  {
    path: '*',
    Page: NotFound,
    Layout: DefaultLayout
  }
]
