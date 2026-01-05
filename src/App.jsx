import React from 'react'
import NavBar from './components/nav-bar/NavBar.jsx'
import MovieList from './components/MovieList/MovieList.jsx'
import Fire from './assets/fire.png'
import Face from './assets/partying-face.png'
import Star from './assets/glowing-star.png'

const App = () => {
  return (
    <div className='app'>
      <NavBar/>
      <MovieList type={'popular'} title={'Popular'} icon={Fire}/>
      <MovieList  type={'top_rated'} title={'Top Rated'} icon={Fire}/>
      <MovieList  type={'upcoming'} title={'Upcoming'} icon={Fire}/>
    </div>
  )
}

export default App