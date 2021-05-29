import { AppRoute } from 'types'

import { DefaultLayout, LayoutWithMenu } from 'layouts'

import { Home, Access, NotFound, Timeline, Profile } from 'pages'

export const routes: AppRoute[] = [
  {
    path: '/',
    Page: Home,
    Layout: DefaultLayout,
    protected: false
  },
  {
    path: '/access',
    Page: Access,
    Layout: DefaultLayout,
    protected: false
  },
  {
    path: '/timeline',
    Page: Timeline,
    Layout: LayoutWithMenu,
    protected: false
  },
  {
    path: '/user/:id',
    Page: Profile,
    Layout: DefaultLayout,
    protected: false
  },
  {
    path: '/me',
    Page: Profile,
    Layout: LayoutWithMenu,
    protected: true
  },
  {
    path: '*',
    Page: NotFound,
    Layout: DefaultLayout,
    protected: false
  }
]
