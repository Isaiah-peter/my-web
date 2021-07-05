import React from "react"
import { Link } from 'react-router-dom'
import menu from './menu.png'

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
    <div className='navbar__container'>
      <h1 className='navbar__logo'>Pe.Isaiah</h1>
      <nav  id='side-bar' className='navbar__content'>
        <ul onClick={hide} className='navbar__ul'>
          <li className='navbar__list'><Link to='#' className='navbar__link'>home</Link></li>
          <li className='navbar__list'><Link to='#' className='navbar__link'>about</Link></li>
          <li className='navbar__list'><Link to='#' className='navbar__link'>service</Link></li>
          <li className='navbar__list'><Link to='#' className='navbar__link'>portfolio</Link></li>
          <li className='navbar__list'><Link to='#' className='navbar__link'>pricing</Link></li>
          <li className='navbar__list'><Link to='#' className='navbar__link'>contact</Link></li>
        </ul>
      </nav>
      <img onClick={show} src={menu} alt='menu' className='navbar-logo menu'/>
    </div>
  )
}

export default Navbar