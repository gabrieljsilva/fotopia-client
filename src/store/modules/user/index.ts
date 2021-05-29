import { createSlice } from '@reduxjs/toolkit'
import { User, Album } from 'types'
import { Author, generateAlbum } from 'utils'

interface UserState extends User {
  isLoggedIn: boolean
  token?: string
  albums: Album[]
}

const initialState: UserState = {
  ...Author,
  isLoggedIn: true,
  albums: generateAlbum(2)
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})
