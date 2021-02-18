// @packages
import React from 'react'
// @styles
import './styles.scss'

const Form = ({ children, onHandleSubmit }) => {
  return (
    <form className='Form' onSubmit={onHandleSubmit}>
      <div className='Form__logo-wrapper'>
        <img
          alt='logo'
          className='Form__logo-wrapper__logo'
          src='assets/logo-white-yellow.png'
          title='logo'
        />
      </div>
      {children}
    </form>
  )
}

export default Form
