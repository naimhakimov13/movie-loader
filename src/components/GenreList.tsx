import React, { useEffect } from 'react'

import { Genre } from '../models/film.interface'
import { useNavigate, useParams } from 'react-router-dom'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'

const GenreList = ({ genres }: { genres: Genre[] }) => {
  const { genre } = useAppSelector(state => state?.film)
  const { selectedGenre } = useActions()
  const navigate = useNavigate();
  const {id} = useParams()

  useEffect(() => {
    if (id) {
      const find = genres.find(g => g.id === +id);
      console.log(genres)
      find ? selectedGenre(find) : ''
    }
  }, [id])

  const select = (genre: Genre) => {
    navigate(`/film/${genre.id}`)
    selectedGenre(genre)
  }

  return (
    <ul className='list-none shadow-md rounded-sm sticky top-0 self-start w-[250px]'>
      {genres.map(g => (
        <li onClick={() => select(g)}
            key={g.id}
            className={'hover:text-gray-400 hover:underline py-1 px-4 transition-all cursor-pointer ' + (g?.id === genre?.id && 'active')}>
            {g.name}
        </li>
      ))}
    </ul>
  )
}

export default GenreList
