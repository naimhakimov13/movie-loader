import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Genre } from '../../models/film.interface'

interface FilmSliceState {
  genre: Genre | null
}

const initialState: FilmSliceState = {
  genre: null
}

export const filmSlice = createSlice({
  name: 'film',
  initialState,
  reducers: {
    selectedGenre(state, action: PayloadAction<Genre>) {
      state.genre = action.payload
    },
  }
})

export const filmAction = filmSlice.actions
export const filmReducer = filmSlice.reducer