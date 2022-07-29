
import React, { useState } from 'react'

import { FilmInterface } from '../models/film.interface'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'
import add from '../assets/add-bookmark-icon.svg'
import remove from '../assets/remove-bookmark-icon.svg'

const FilmCard = ({ film }: { film: FilmInterface }) => {
  const [loaded, setLoaded] = useState(false)
  const { favorites } = useAppSelector(state => state.film)
  const { addToFavorites, removeToFavorites } = useActions()
  const [isFav, setIsFav] = useState(favorites.includes(film.id));

  const onLoad = () => setLoaded(true)

  const addToFavorite = (filmId: number) => {
    addToFavorites(filmId)
    setIsFav(true)
  }

  const removeFromFavorite = (filmId: number) => {
    removeToFavorites(filmId)
    setIsFav(false)
  }

  return (
    <>
      {film && (
        <div className='card shadow-md rounded-sm'>
          <div className='card-img'>
            <img
              className='object-cover w-full'
              style={{ display: loaded ? 'block' : 'none' }}
              onLoad={onLoad}
              src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + film.backdrop_path}
            />
            {!loaded && <div className='card-img skeleton h-[420px] w-full bg-red-500'></div>}
          </div>
          <div className='card-body'>
            <h2 className='card-title flex justify-between'>
              <span>{film.vote_average}</span>
              <span onClick={() => addToFavorites(film.id)}>
                {isFav && <img onClick={() => removeFromFavorite(film.id)} src={remove} alt='' />}
                {!isFav && <img onClick={() => addToFavorite(film.id)} src={add} alt='' />}
              </span>
            </h2>
            <p className='card-intro'>
              {film.title}
            </p>
          </div>
        </div>
      )}
    </>
  )
}

export default FilmCard