import react from 'react'
import isaiahImg from '../img/imageIsaiah.png'
import { Link } from 'react-router-dom'

const Header = () =>{
    return(
      <div className='header'>
        <div className='heading'>
          <div className='header__discription'>
            <span className='header__tip'>hi there</span>
            <h1 className='header__main'>
              I am Peter Isaiah
              <br/>
              <span className='header__animate'>
              </span>
            </h1>
            <p className='header__sub'>Far far away, behind the word mountains,
             far from the countries
             Vokalia and Consonantia, there live the blind texts.</p>

             <div className='header__button'>
               <a className='btn btn-blue'>hire me &rarr;</a>
               <a className='btn btn-white'>view potfolio &rarr;</a>
             </div>
             <div className='header__links'>
               <Link to='/https://web.facebook.com/isaiah.peter.7773' className='links'> facebook</Link>
               <Link to='/https://www.linkedin.com/in/peter-isaiah-607943200' className='links'> linkedin</Link>
             </div>
          </div>
      </div>
      </div>
    )
}

export default Header