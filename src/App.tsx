import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { useGetGenresQuery } from './store/movie/film.api'

import Header from './components/Header'
import GenreList from './components/GenreList'
import Film from './pages/Film'

function App() {
  const { data: genres } = useGetGenresQuery()

  return (
    <>
      <Header />
      <div className='container mx-auto flex p-[15px]'>
        {genres && <GenreList genreList={genres} />}
        <div className='px-[15px]'>
          <Routes>
            <Route path='film/:id' element={<Film />} />
            <Route path='film' element={<Film />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
