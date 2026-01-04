import React from 'react'
import NavBar from './components/nav-bar/NavBar.jsx'
import MovieList from './components/MovieList/MovieList.jsx'

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <MovieList/>
    </div>
  )
}

export default App