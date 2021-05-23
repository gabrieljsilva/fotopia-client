import { AppRoute } from 'types'

import { DefaultLayout, LoggedInLayout } from 'layouts'

import { Home, Access, NotFound, Timeline } from 'pages'

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
    path: '/timeline',
    Page: Timeline,
    Layout: LoggedInLayout
  },
  {
    path: '*',
    Page: NotFound,
    Layout: DefaultLayout
  }
]
