import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Error from './Components/Error';
import Home from './Components/Home';
import Movie from './Components/Movie';
import './App.css'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='*' element={<Error />}></Route>
        <Route path='movie/:id' element={<Movie />}></Route>
      </Routes>
    </>
  )
}

export default App