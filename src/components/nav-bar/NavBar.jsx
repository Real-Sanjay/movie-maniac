import React from 'react'
import Fire  from '../../assets/fire.png'
import GlowingStar  from '../../assets/glowing-star.png'
import PartyFace  from '../../assets/partying-face.png'
import './NavBar.css'

const NavBar = () => {
  return (
     <nav className='app_nav'>
        <h1 className='app_nav_title'>Movie Maniac</h1>
        <div className="nav_links">
            <a className='nav_emoji' href="#">Popular<img src={Fire}></img></a>
            <a className='nav_emoji' href="#">Top Rated<img src={GlowingStar}></img></a>
            <a className='nav_emoji' href="#">Upcoming<img src={PartyFace}></img></a>
        </div>
     </nav>
  )
}

export default NavBar