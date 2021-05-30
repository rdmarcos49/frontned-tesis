// @packages
import React from 'react'
// @components
import Header from 'components/Header'
import { AdminOptions } from 'components/UserOptions/AdminOptions'
import { TechnicalOptions } from 'components/UserOptions/TechnicalOptions'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { ROLES } from 'constants/roles'
// @styles
import './styles.scss'
import UserOptions from 'components/UserOptions/index'

const MenuRoles = {
  [ROLES.ADMIN]: AdminOptions,
  [ROLES.TECHNICAL]: TechnicalOptions,
  // [ROLES.ONLY_READ]: OnlyReadOptions,
  // [ROLES.OPHTHALMOLOGIST]: OphthalmologistOptions,
}

function Home() {
  const { isLoading, isLogged, user } = useUser()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (!isLogged) {
    return <p>Para ver este contenido debes estar loggeado</p>
  }

  const { role } = user

  return (
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
      <UserOptions options={MenuRoles[role]}/>
    </div>
  )
}

export default Home
