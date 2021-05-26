// @packages
import React from 'react'
// @components
import Header from 'components/Header'
import TechnicalOptions from 'components/TechnicalOptions'
// @hooks
import useUser from 'hooks/useUser'
// @styles
import './styles.scss'

function Home() {
  const {user, isLoading} = useUser()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  /**
   * if (!user) {
   *  enviar a pagina de error con texto de NO TENES PERMISOS POR NO ESTAR LOGUEADO
   * }
   */

  return (
    <>
    {user 
    ?
      <div className='Home'>
        <Header />
        <div className='Home__logo-wrapper'>
          <img
            alt='logo'
            className='Home__logo-wrapper__logo'
            src='assets/logo-white-yellow.png'
            title='logo'
          />
        </div>
        <h2 className='Home__title'>Bienvenido/a a Retinar</h2>
        <h3 className='Home__subtitle'>¿Que desea hacer hoy?</h3>
        <TechnicalOptions />
      </div>
    :
      <p>No estas logueado, y no podes ver el contenido!</p>
    }
    </>
  )
}

export default Home
