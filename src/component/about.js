import React, { useEffect, useState } from 'react'
import aboutI from '../img/aboutI.jpg'
import {BrowserRouter as Router, Link, Route } from "react-router-dom";
import AboutMe  from './about-component/aboutMe';
import Skill from './about-component/skill';
import Experience from './about-component/experience';

const About = () => {


  useEffect(()=>{
    const abt = document.getElementById('abt')
    const ski = document.getElementById('ski')
    const exp = document.getElementById('exp')

    

    if(window.location.pathname === '/'){
      abt.classList.add('active')
      ski.classList.remove('active')
      exp.classList.remove('active')
    }else if(window.location.pathname === '/ski'){
      abt.classList.remove('active')
      ski.classList.add('active')
      exp.classList.remove('active')
    }else if(window.location.pathname === '/exp'){
      abt.classList.remove('active')
      ski.classList.remove('active')
      exp.classList.add('active')
    }
  },[])
  



  return (
    <div className='row'>
      <section className='abouts' id='about'>
        <div className='about__page'>
          <div className='about__image' style={{ backgroundImage: `url(${aboutI})` }}></div>
          <div className='about__skills'>
            <div className='skills__btn mb-5'>
              <ul>
                <li className='skills__list'><a href='/' id='abt' className='a' >about me</a></li>
                <li className='skills__list '><a id='ski' href='/ski' className='a'>skill</a></li>
                <li className='skills__list '><a id='exp' href='/exp' className='a'>experience</a></li>
              </ul>
            </div>
            <div>
             <Router>
               <Route exact path='/' component={AboutMe}/>
               <Route exact path='/ski' component={Skill}/>
               <Route exact path='/exp' component={Experience}/>
             </Router>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About