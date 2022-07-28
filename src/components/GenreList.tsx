import React from 'react'

import { Genre } from '../models/film.interface'
import { Link, useLocation } from 'react-router-dom'

const GenreList = ({ genres }: { genres: Genre[] }) => {
  const location = useLocation()
  const pathName = location.pathname.split('/')
  const id = pathName[pathName.length - 1]

  return (
    <ul className='list-none shadow-md rounded-sm sticky top-0 self-start w-full'>
      {genres.map(genre => (
        <li key={genre.id} className={'hover:text-gray-400 hover:underline py-1 px-4 transition-all ' + (+id === genre.id && 'active') }>
          <Link to={`film/${genre.id}`} key={genre.id}>{genre.name}</Link>
        </li>
      ))}
    </ul>
  )
}

export default GenreList