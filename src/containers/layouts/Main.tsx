import React from 'react'
import GenreList from '../../components/GenreList'
import { useGetGenresQuery } from '../../store/film/film.api'

export function Main({ children }: { children: any }) {
  const { data } = useGetGenresQuery()

  return (
    <div className="flex">
      <div>
        {data && <GenreList genres={data} />}
      </div>
      <div className="ml-[15px]">
        {children}
      </div>
    </div>
  )
}