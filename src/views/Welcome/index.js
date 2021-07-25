// @packages
import { useEffect } from 'react'
import { Link, useLocation } from 'wouter'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { URL } from 'constants/urls'
// @styles
import './styles.scss'

function Welcome() {
  const [, setLocation] = useLocation()
  const { isLoading, isLogged } = useUser()

  useEffect(() => {
    if (isLoading) return <p>Cargando...</p>
  }, [isLoading])

  useEffect(() => {
    if (isLogged) {
      setLocation(URL.HOME)
    }
  }, [isLogged, setLocation])

  return (
    <div className='Welcome'>
      <h1 className='Welcome__title'>Welcome</h1>
      <Link className='Welcome__link-to-login' href='/login'>Ir a "Log in"!</Link>
      <Link className='Welcome__link-to-login' href='/signin'>Ir a "Sign in"!</Link>
    </div>
  )
}

export default Welcome
