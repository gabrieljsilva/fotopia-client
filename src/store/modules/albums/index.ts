import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Album } from 'types'
import { generateAlbum } from 'utils'

interface AlbumState {
  albums: Album[]
}

const initialState: AlbumState = {
  albums: generateAlbum(5)
}

export const AlbumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    SET_ALBUMS(state, action: PayloadAction<Album[]>) {
      state.albums = action.payload
    }
  }
})

export const { SET_ALBUMS } = AlbumsSlice.actions
