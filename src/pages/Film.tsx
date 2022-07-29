import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLazyGetGenreIdQuery, useGetPopularFilmQuery } from '../store/film/film.api'
import FilmCard from '../components/FilmCard'
import { Main } from '../containers/layouts/Main'

const Film = () => {
  const { id } = useParams()
  const [fetchFilms, { data }] = useLazyGetGenreIdQuery()
  const { data: popular } = useGetPopularFilmQuery()

  useEffect(() => {
    fetchFilms(id)
  }, [id])

  return (
    <Main>
      <div className='flex flex-wrap gap-[15px]'>
        {id ? data?.map(film => (<FilmCard key={film.id} film={film} />)) : popular?.map(film => (<FilmCard key={film.id} film={film} />))}
      </div>
    </Main>
  )
}

export default Film