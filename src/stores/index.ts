import { configureStore } from '@reduxjs/toolkit'
import applicationReducer from './applications/slice'

const store = configureStore({
  reducer: {
    application: applicationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['application/setApplicationUtils'],
        ignoredPaths: ['application.applicationUtils'],
      },
    }),
})

const makeStore = () => store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default makeStore
