import { useState } from 'react'

import { FilmInterface } from '../models/film.interface'

const FilmCard = ({ film }: { film: FilmInterface }) => {
  const [loaded, setLoaded] = useState(false)

  const onLoad = () => setLoaded(true)

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
            <h2 className='card-title'>
              {film.vote_average}
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