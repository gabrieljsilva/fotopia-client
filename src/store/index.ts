import { combineReducers, createStore } from 'redux'
import { TypedUseSelectorHook, useSelector as typedUserSelector } from 'react-redux'

import { userSlice } from './modules'

const reducers = combineReducers({
  user: userSlice.reducer
})

export const store = createStore(reducers)

export const useSelector: TypedUseSelectorHook<ReturnType<typeof reducers>> = typedUserSelector
