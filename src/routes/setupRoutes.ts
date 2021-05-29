import { AppRoute } from 'types'

import { DefaultLayout, LoggedInLayout } from 'layouts'

import { Home, Access, NotFound, Timeline, Profile } from 'pages'

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
    path: '/user/:id',
    Page: Profile,
    Layout: DefaultLayout
  },
  {
    path: '/me',
    Page: Profile,
    Layout: LoggedInLayout
  },
  {
    path: '*',
    Page: NotFound,
    Layout: DefaultLayout
  }
]
