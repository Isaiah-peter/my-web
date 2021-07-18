import React from 'react'

function Services() {
  return (
    <div className='row'>
      <div className='service' id='sev'>
        <h1 id="service" className='center'>service</h1>
        <div className='center wd-70'>
          <h1 className='service__head '>This is My Expertise, The Services I'll Provide My Clients</h1>
        </div>
        <div className='grid-3 mt-4' data-aos='flip-up'>
          <div className='service__card'>
            <div className='service__icon-box mb-5'></div>
            <h2 className='service__card-head'>UI & UX Design</h2>
            <p className='service__text'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            <a href='#' className='service__link mt-3'>learn more &rarr;</a>
          </div>
          <div className='service__card'>
            <div className='service__icon-box mb-5'></div>
            <h2 className='service__card-head'>Web development</h2>
            <p className='service__text'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            <a href='#' className='service__link'>learn more &rarr;</a>
          </div>
          <div className='service__card'>
            <div className='service__icon-box mb-5'></div>
            <h2 className='service__card-head'>Mobile App</h2>
            <p className='service__text'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            <a href='#' className='service__link mt-3'>learn more &rarr;</a>
          </div>
        </div>
        ]<div className='wd-70'>
          <h4 className='center mt-3 service__contact-me'>Have any works you want to done by me? <span>Contact me</span></h4>
        <p className='service__text mt-3 center font-2'>Far far away,
          behind the word mountains,
          far from the countries Vokalia and Consonantia,
          there live the blind texts.
        </p>
        </div>

      </div>
    </div>
  )
}

export default Services
