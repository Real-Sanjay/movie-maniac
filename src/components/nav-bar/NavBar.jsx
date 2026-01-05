import React from 'react'
import Fire  from '../../assets/fire.png'
import GlowingStar  from '../../assets/glowing-star.png'
import PartyFace  from '../../assets/partying-face.png'
import './NavBar.css'
import DarkMode from '../DarkMode/DarkMode.jsx'

const NavBar = () => {
  return (
     <nav className='app_nav'>
        <h1 className='app_nav_title'>Movie Maniac</h1>
        <div className="nav_links">
            <DarkMode/>
            <a className='nav_emoji' href="#popular">Popular<img src={Fire}></img></a>
            <a className='nav_emoji' href="#top_rated">Top Rated<img src={GlowingStar}></img></a>
            <a className='nav_emoji' href="#upcoming">Upcoming<img src={PartyFace}></img></a>
        </div>
     </nav>
  )
}

export default NavBar