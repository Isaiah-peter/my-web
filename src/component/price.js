import React from 'react'

function price() {
  return (
    <div className='row'>
      <div className='service' id='pricing'>
        <h1 id="service" className='center'>MY PRICING</h1>
        <div className='center wd-70'>
          <h1 className='service__head'>Pricing & Packages</h1>
        </div>
        <div className='grid-3 mt-4'>
          <div className='service__card center' data-aos='flip-right'>
            <h4 id="service" className='plan'>basic plan</h4>
            <h2 className='service__card-head mb-big'>$ 49K</h2>
            <p className='service__text mb-5'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            <a href='#' className='blue__button'>get started</a>
          </div>
          <div className='service__card center' data-aos='flip-right'>
            <h4 id="service" className='plan'>beginner plan</h4>
            <h2 className='service__card-head mb-big'>$ 79K</h2>
            <p className='service__text mb-5'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            <a href='#' className='blue__button'>get started</a>
          </div>
          <div className='service__card center' data-aos='flip-right'>
            <h4 id="service" className='plan'>premium plan</h4>
            <h2 className='service__card-head mb-big'>$ 109K</h2>
            <p className='service__text mb-5'>
              Far far away, behind the word mountains,
              far from the countries Vokalia and Consonantia,
              there live the blind texts.
            </p>
            <a href='#' className='blue__button'>get started</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default price
