import { AppRoute } from 'types'

import { DefaultLayout, LayoutWithMenu } from 'layouts'

import { Home, Access, NotFound, Timeline, Profile } from 'pages'

export const routes: AppRoute[] = [
  {
    path: '/',
    Page: Home,
    Layout: DefaultLayout,
    isProtected: false
  },
  {
    path: '/access',
    Page: Access,
    Layout: DefaultLayout,
    isProtected: false
  },
  {
    path: '/timeline',
    Page: Timeline,
    Layout: LayoutWithMenu,
    isProtected: false
  },
  {
    path: '/user/:id',
    Page: Profile,
    Layout: DefaultLayout,
    isProtected: false
  },
  {
    path: '/me',
    Page: Profile,
    Layout: LayoutWithMenu,
    isProtected: true
  },
  {
    path: '*',
    Page: NotFound,
    Layout: DefaultLayout,
    isProtected: false
  }
]
