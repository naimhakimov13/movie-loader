import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useGetMovieByIdQuery, useLazyGetVideoByIdQuery } from '../store/film/film.api'

export function FilmById() {
  const { id } = useParams()
  const { data: movie } = useGetMovieByIdQuery(id)
  const [fetchVideo, { data: videoKey }] = useLazyGetVideoByIdQuery()

  useEffect(() => {
    fetchVideo(id)
    console.log('render')
  }, [])

  return (
    <>
      {movie && (
        <div className='flex flex-wrap gap-4'>
          <div>
            <img src={'https://www.themoviedb.org/t/p/w220_and_h330_face/' + movie.backdrop_path} />
          </div>
          <div className='max-w-[400px]'>
            <h4>Release year: {movie?.release_date}</h4>
            <h4>Popularity: {movie?.popularity}</h4>
            <h4>Running time: {movie?.runtime} min</h4>
            <h4>Genre: {movie.genres.map(g => (<Link className="hover:text-gray-400 hover:underline px-1 transition-all" to={'/film/' + g.id}>{g.name + ' '}</Link>))} </h4>
            <h4>Country:</h4>
            <h4 className='max-w-[400px]'>Overview: {movie?.overview}</h4>
          </div>

          {videoKey &&
          (<iframe width='560' src={'https://www.youtube.com/embed/' + videoKey} title='YouTube video player'
                   frameBorder='0'
                   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                   allowFullScreen>wer</iframe>)
          }
        </div>
      )}
    </>
  )
}