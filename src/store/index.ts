import { combineReducers, createStore } from 'redux'
import {
  TypedUseSelectorHook,
  useSelector as typedUserSelector
} from 'react-redux'

import { userSlice, AlbumsSlice } from './modules'

const reducers = combineReducers({
  user: userSlice.reducer,
  albums: AlbumsSlice.reducer
})

export const store = createStore(reducers)

export const useSelector: TypedUseSelectorHook<ReturnType<typeof reducers>> =
  typedUserSelector
