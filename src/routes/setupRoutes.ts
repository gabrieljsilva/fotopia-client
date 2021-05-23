import { AppRoute } from 'types'

import { DefaultLayout } from 'layouts'

import { Home } from 'pages'

export const routes: AppRoute[] = [
  {
    path: '/',
    Page: Home,
    Layout: DefaultLayout
  }
]
