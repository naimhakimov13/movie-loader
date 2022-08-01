import React, { useState } from 'react'

import { FilmInterface } from '../models/film.interface'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'
import add from '../assets/add-bookmark-icon.svg'
import remove from '../assets/remove-bookmark-icon.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const FilmCard = ({ film }: { film: FilmInterface }) => {
  const [loaded, setLoaded] = useState(false)
  const { favorites } = useAppSelector(state => state.film)
  const { addToFavorites, removeToFavorites } = useActions()
  const [isFav, setIsFav] = useState(favorites.includes(film.id))

  const notify = (message: string) => toast(message, {
    position: "top-right",
    autoClose: 150
  });

  const onLoad = () => setLoaded(true)

  const addToFavorite = (filmId: number) => {
    addToFavorites(filmId)
    setIsFav(true)
    notify('Added to favorites')
  }

  const removeFromFavorite = (filmId: number) => {
    removeToFavorites(filmId)
    setIsFav(false)
    notify('Remove from favorites')
  }

  return (
    <>
      {film && (
        <div className='card shadow-md rounded-sm relative'>
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
              <span className='absolute top-2 right-2'>
                {isFav && <img onClick={() => removeFromFavorite(film.id)} src={add} alt='' />}
                {!isFav && <img onClick={() => addToFavorite(film.id)} src={remove} alt='' />}
              </span>
            </h2>
            <div className='flex justify-between mt-2 items-center'>
              <p className='card-intro'>
                {film.title}
              </p>
              <Link to={'/movie/' + film.id} className='bg-gray-500 text-white p-2 rounded-sm'>Open</Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FilmCard
