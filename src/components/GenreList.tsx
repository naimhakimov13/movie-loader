import React, { useState } from 'react'

import { Genre } from '../models/film.interface'
import { Link, useParams } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

const GenreList = ({ genres }: { genres: Genre[] }) => {
  const { genre } = useAppSelector(state => state?.film)
  const { selectedGenre } = useActions()

  return (
    <ul className='list-none shadow-md rounded-sm sticky top-0 self-start w-[250px]'>
      {genres.map(g => (
        <li onClick={() => selectedGenre(g)}
            key={g.id}
            className={'hover:text-gray-400 hover:underline py-1 px-4 transition-all ' + (genre?.id === g.id && 'active')}>
          <Link to={`/film/${g.id}`}>
            {g.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default GenreList