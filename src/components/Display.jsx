import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
  return (
    <div className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] overflow-auto lg:w-[75%] lg:ml-0 text-white'>
      <Routes>
        <Route path='/Music-Player-Website' element={<DisplayHome/>} />
      </Routes>
    </div>
  )
}

export default Display
