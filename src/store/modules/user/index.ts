import { createSlice } from '@reduxjs/toolkit'

import { User } from 'types'

const initialState: User = {
  name: '',
  email: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})
