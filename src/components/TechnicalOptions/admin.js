// @packages
import React from 'react'
// @styles
import './styles.scss'

const AdminOptions = () => {

  const genericHandler = (e) => {
    console.log("pendiente")
  }

  return (
    <div className='TechnicalOptions'>
      <div className='TechnicalOptions__option'>
        <div
          className='TechnicalOptions__option__icon-wrapper'
          onClick={genericHandler}
        >
          <i className="fas fa-9x fa-user-cog"></i>
        </div>
        <p className='TechnicalOptions__option__text'>
          Alta, baja, modifición de usuarios/as
        </p>
      </div>

      <div
        className='TechnicalOptions__option'
        onClick={genericHandler}
      >
        <div className='TechnicalOptions__option__icon-wrapper'>
          <i className="fas fa-9x fa-chart-bar"></i>
        </div>
        <p className='TechnicalOptions__option__text'>
          Estadisticas de usuario/a
        </p>
      </div>

      <div
        className='TechnicalOptions__option'
        onClick={genericHandler}
      >
        <div className='TechnicalOptions__option__icon-wrapper'>
          <i className="fas fa-9x fa-server"></i>
        </div>
        <p className='TechnicalOptions__option__text'>
          Estadisticas del sistema
        </p>
      </div>

      <div
        className='TechnicalOptions__option'
        onClick={genericHandler}
      >
        <div className='TechnicalOptions__option__icon-wrapper'>
          <i className="fas fa-9x fa-database"></i>
        </div>
        <p className='TechnicalOptions__option__text'>
          Acceso a datos
        </p>
      </div>
    </div>
  )
}

export default AdminOptions
