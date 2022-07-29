import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { filmApi } from './film/film.api'
import { filmReducer } from './film/film.slice'

export const store = configureStore({
  reducer: {
    [filmApi.reducerPath]: filmApi.reducer,
    film: filmReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(filmApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>