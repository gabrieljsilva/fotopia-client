import { Image } from 'types'

export interface Album {
  id: number
  authorId?: number
  name: string
  images: Image[]
}
