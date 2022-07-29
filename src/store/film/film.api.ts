import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { FilmInterface, Genre, GenreList, ServerResponse, VideoKey } from '../../models/film.interface'
import { apiKey } from '../../utils/api-key'

export const filmApi = createApi({
  reducerPath: 'list',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.themoviedb.org/3/'
  }),
  endpoints: build => ({
    getGenres: build.query<Genre[], void>({
      query: () => ({
        url: 'genre/movie/list',
        params: apiKey
      }),
      transformResponse: (response: GenreList) => response.genres
    }),
    getGenreId: build.query<FilmInterface[], string | undefined>({
      query: (id: string) => ({
        url: `discover/movie?sort_by=popularity.desc`,
        params: {
          ...apiKey,
          with_genres: id
        }
      }),
      transformResponse: (response: ServerResponse<FilmInterface>) => response.results
    }),
    getPopularFilm: build.query<FilmInterface[], void>({
      query: () => ({
        url: 'movie/popular',
        params: apiKey
      }),
      transformResponse: (response: ServerResponse<FilmInterface>) => response.results
    }),
    getMovieById: build.query<FilmInterface, string | undefined>({
      query: (id: string) => ({
        url: `movie/${id}`,
        params: apiKey
      })
    }),
    getVideoById: build.query<VideoKey, string | undefined>({
      query: (id: string) => ({
        url: `movie/${id}/videos`,
        params: apiKey
      }),
      transformResponse: (response: ServerResponse<any>) => response.results[0].key
    })
  })
})

export const { useGetMovieByIdQuery, useGetGenresQuery, useLazyGetGenreIdQuery, useGetPopularFilmQuery, useLazyGetVideoByIdQuery } = filmApi