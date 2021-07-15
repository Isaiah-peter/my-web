import React, { useEffect, useState } from 'react'
import aboutI from '../img/aboutI.jpg'
import { Link } from "react-router-dom";


const About = () => {
  const [ids ,setIds] = useState('')

  return (
    <div className='row'>
      <section className='abouts'>
        <div className='about__page'>
          <div className='about__image' style={{ backgroundImage: `url(${aboutI})` }}></div>
          <div className='about__skills'>
            <div className='skills__btn mb-5'>
              <ul>
                <li className='skills__list'><a id='about-me' 
                onClick={()=>{}}
                 className='active'>about me</a></li>
                <li className='skills__list active'><a id='skill' onClick={()=>{}} >skill</a></li>
                <li className='skills__list active'><a id='exp' onClick={()=>{}} >experience</a></li>
              </ul>
            </div>
            <div>
            <h1 className='skills__discription-head mb-5'>my story</h1>
            <p className='skills__text'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts. Separated they live
              in Bookmarksgrove right at the coast of the Semantics,
              a large language ocean.
            </p>
            <h2 className='skills__discription-sub'>
              I Do Web Design & Developement since I was 18 Years Old
            </h2>
            <p className='skills__text'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About