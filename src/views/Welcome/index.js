// @packages
import React from 'react'
import { Link } from 'wouter'
// @styles
import './styles.scss'

function Welcome() {
  return (
    <div className='Welcome'>
      <h1 className='Welcome__title'>Welcome</h1>
      <Link className='Welcome__link-to-login' href='/login'>Ir a "Log in"!</Link>
      <Link className='Welcome__link-to-login' href='/signin'>Ir a "Sign in"!</Link>
    </div>
  )
}

export default Welcome
