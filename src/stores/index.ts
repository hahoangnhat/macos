import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counters/slice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

const makeStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default makeStore
