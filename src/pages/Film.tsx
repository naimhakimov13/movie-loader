import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useLazyGetGenreIdQuery } from '../store/movie/film.api'
import FilmCard from '../components/FilmCard'


const Film = () => {
  const { id } = useParams()
  const [fetchFilms, { data }] = useLazyGetGenreIdQuery()

  useEffect(() => {
    fetchFilms(id)
  }, [id])

  return (
    <div className='flex flex-wrap gap-[15px]'>
      {data && data.map(film => (<FilmCard key={film.id} film={film} />))}
    </div>
  )
}

export default Film