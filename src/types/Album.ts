import { Image } from 'types'

export interface Album {
  id?: string
  name: string
  images: Image[]
}
