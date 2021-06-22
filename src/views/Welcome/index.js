// @packages
import React from 'react'
import { Link, useLocation } from 'wouter'
// @components
import AlreadyLogged from 'components/AlreadyLogged'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { publicUrl } from 'constants/urls'
// @styles
import './styles.scss'

function Welcome() {
  const [location] = useLocation()
  const { isLoading, isLogged } = useUser()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (!isLoading && isLogged) {
    return <AlreadyLogged path={publicUrl[location]} />
  }

  return (
    <div className='Welcome'>
      <h1 className='Welcome__title'>Welcome</h1>
      <Link className='Welcome__link-to-login' href='/login'>Ir a "Log in"!</Link>
      <Link className='Welcome__link-to-login' href='/signin'>Ir a "Sign in"!</Link>
    </div>
  )
}

export default Welcome
