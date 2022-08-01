import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from '../../models/film.interface'

const favoritesKey = 'favorites'

interface FilmSliceState {
  genre: Genre | null,
  favorites: string[]
}

const initialState: FilmSliceState = {
  genre: null,
  favorites: JSON.parse(localStorage.getItem(favoritesKey) || '[]')
}

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    selectedGenre(state, action: PayloadAction<Genre>) {
      state.genre = action.payload
    },
    addToFavorites(state, action: PayloadAction<string>) {
      state.favorites.push(action.payload)
      localStorage.setItem(favoritesKey, JSON.stringify(state.favorites))
    },
    removeToFavorites(state, action: PayloadAction<string>) {
      state.favorites.filter(fav => fav !== action.payload)
      localStorage.setItem(favoritesKey, JSON.stringify(state.favorites))
    }
  }
})

export const filmAction = filmSlice.actions
export const filmReducer = filmSlice.reducer
