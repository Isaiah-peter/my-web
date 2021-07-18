import React from "react"
import { Link } from 'react-router-dom'
import menu from '../img/menu.png'

const Navbar = () =>{
 const hide = () => {
    const ul = document.getElementById('side-bar')

    ul.classList.remove('show')

  }
 const show = () => {
    const ul = document.getElementById('side-bar')
    ul.classList.add('show')
  }

  return(
    <div className='navbar'>
      <div className='row'>
      <div className='navbar__container'  data-aos='fade-down'>
      <h1 className='navbar__logo'>Pe.Isaiah</h1>
      <nav  id='side-bar' className='navbar__content'>
        <ul onClick={hide} className='navbar__ul'>
          <li className='navbar__list'><a href='#head' className='navbar__link'>home</a></li>
          <li className='navbar__list'><a href='#about' className='navbar__link'>about</a></li>
          <li className='navbar__list'><a href='#sev' className='navbar__link'>service</a></li>
          <li className='navbar__list'><a href='#' className='navbar__link'>portfolio</a></li>
          <li className='navbar__list'><a href='#' className='navbar__link'>pricing</a></li>
          <li className='navbar__list'><a href='#' className='navbar__link'>contact</a></li>
        </ul>
      </nav>
      <img onClick={show} src={menu} alt='menu' className='navbar-logo menu'/>
      </div>
      </div>
    </div>
  )
}

export default Navbar