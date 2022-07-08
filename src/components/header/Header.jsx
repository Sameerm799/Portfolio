import React from 'react'
import './header.css'
import Resume from './Resume'
import ME from '../../assests/YOr.png'
import HeaderSocials from './HeaderSocials'
import ReactRotatingText from "react-rotating-text"

const content = ["Web", "Game", "Software"];

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I'm</h5>
        <h1>Sameer Muhammad</h1>
        <h5 className='text-light'><ReactRotatingText items={content} emptyPause={200} pause={2000} typingInterval={90}/>Developer </h5>
        <p>Bit of a jack of all trades when it comes to all things developing. I constantly desire the vast knowledge of all the realms of developing. Arming myself for any job given to me.</p>
        <Resume />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header