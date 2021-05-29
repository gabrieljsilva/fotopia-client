import { ComponentType } from 'react'
import { LayoutProps } from './Layout'

export interface AppRoute {
  path: string
  Page: ComponentType<any>
  Layout: ComponentType<LayoutProps>
  isProtected: boolean
}
