import React from 'react'

function Form() {
  return (
    <div className='contact__form'>
      <h1 className='contact__form--head'>Contact us</h1>
      <p className='service__text'>We're open for any suggestion or just to have a chat</p>
      <div className="contact__form--address">
        <div className='contact__form--address-content'>
          <h1 className='contact__form--address-content-head'>MY ADDRESS:</h1>
          <p className='service__text'>198 West 21th Street, Suite 721 New York NY 10016</p>
        </div>

        <div className='contact__form--address-content'>
          <h1 className='contact__form--address-content-head'>MY EMAIL:</h1>
          <p className='service__text'>peterisaiah4fun@gmail.com</p>
        </div>

        <div className='contact__form--address-content'>
          <h1 className='contact__form--address-content-head'>MY PHONE:</h1>
          <p className='service__text'>08104663471</p>
        </div>
      </div>
      <form className='contact__form-page'>
        <div className='contact__name-email'>
          <input type='text' placeholder='name' className='contact__input contact__name' />
          <input type='email' placeholder='email' className='contact__input contact__email' />
        </div>
        <input type='text' placeholder='subject' className='contact__input' />
        <textarea name="message"
          className="contact__input" id="message"
          cols="30" rows="4" placeholder="Create a message here"
        />
        <a href='#' className='contact__btn'> sent message</a>
      </form>
      
    </div>
  )
}

export default Form
