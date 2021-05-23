import { AppRoute } from 'types'

import { DefaultLayout } from 'layouts'

import { Home, Access, NotFound } from 'pages'

export const routes: AppRoute[] = [
  {
    path: '/',
    Page: Home,
    Layout: DefaultLayout
  },
  {
    path: '/access',
    Page: Access,
    Layout: DefaultLayout
  },
  {
    path: '*',
    Page: NotFound,
    Layout: DefaultLayout
  }
]
