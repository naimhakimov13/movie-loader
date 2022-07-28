import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filmApi } from './movie/film.api'

export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>