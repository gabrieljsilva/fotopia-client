import { createSlice } from '@reduxjs/toolkit'
import { User } from 'types'
import { Author } from 'utils'

interface UserState extends User {
  isLoggedIn: boolean
  token?: string
}

const initialState: UserState = {
  ...Author,
  isLoggedIn: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})
