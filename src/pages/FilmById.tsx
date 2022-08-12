import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMovieByIdQuery, useLazyGetVideoByIdQuery } from '../store/film/film.api'

export function FilmById() {
  const { id } = useParams()
  const { data: movie } = useGetMovieByIdQuery(id)
  const [fetchVideo, { data: videoKey }] = useLazyGetVideoByIdQuery()
  const [onload, setOnload] = useState(false)

  useEffect(() => {
    fetchVideo(id)
  }, [])

  return (
    <>
      {movie && (
        <div className='flex flex-wrap gap-4'>
          <div className='flex-1'
               style={{ display: onload ? 'block' : 'none' }}>
            <img className='md:w-[100%]'
                  src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + movie.backdrop_path}
                  onLoad={() => setOnload(true)} />
          </div>
          <div className='max-w-[400px]'>
            <h4>Release year: {movie?.release_date}</h4>
            <h4>Popularity: {movie?.popularity}</h4>
            <h4>Running time: {movie?.runtime} min</h4>
            <h4>Genre: {movie.genres.map(g =>
              (<Link className="hover:text-gray-400 hover:underline px-1 transition-all cursor-pointer underline" to={'/film/' + g.id}>{g.name + ' '}</Link>)
            )} </h4>
            <h4>Country:</h4>
            <h4 className='max-w-[400px]'>Overview: {movie?.overview}</h4>
          </div>

          {videoKey &&
          (<iframe className="max-w-[100%]" width='560' src={'https://www.youtube.com/embed/' + videoKey} title='YouTube video player'
                   frameBorder='0'
                   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                   allowFullScreen>wer</iframe>)
          }
        </div>
      )}
    </>
  )
}
