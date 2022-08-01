import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Film from './pages/Film'
import { FilmById } from './pages/FilmById'
import { Favorites } from './pages/Favorites'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <Header />
      <div className='container mx-auto flex'>
        <ToastContainer />
        <div className='px-[15px] py-[15px]'>
          <Routes>
            <Route path='/' element={<Film />} />
            <Route path='film/:id' element={<Film />} />
            <Route path='movie/:id' element={<FilmById />} />
            <Route path='favorites' element={<Favorites />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
