import React from 'react'

import { Genre } from '../models/film.interface'
import { Link } from 'react-router-dom'

const GenreList = ({ genreList }: { genreList: Genre[] }) => {
  return (
    <ul className='list-none shadow-md p-5 rounded-sm sticky top-0 self-start'>
      {genreList && genreList.map(genre => (
        <li key={genre.id} className='text-lg hover:text-gray-400 hover:underline-offset-'>
          <Link to={`film/${genre.id}`} key={genre.id}>{genre.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default GenreList