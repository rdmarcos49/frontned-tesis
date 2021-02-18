// @packages
import React from 'react'
import { useLocation } from 'wouter'
// @styles
import './styles.scss'

const TechnicalOptions = () => {

  const [, setLocation] = useLocation();

  const handleAddNewPatient = (e) => {
    setLocation('/newpatient')
  }

  const handlePreviousPatient = (e) => {
    console.log('pendiente revisar consultas anteriores')
  }

  return (
    <div className='TechnicalOptions'>
      <div className='TechnicalOptions__option'>
        <div
          className='TechnicalOptions__option__icon-wrapper'
          onClick={handleAddNewPatient}
        >
          <i className="fas fa-9x fa-user-plus"></i>
        </div>
        <p className='TechnicalOptions__option__text'>
          Consulta de nuevo paciente
        </p>
      </div>

      <div
        className='TechnicalOptions__option'
        onClick={handlePreviousPatient}
      >
        <div className='TechnicalOptions__option__icon-wrapper'>
          <i className="fas fa-9x fa-user-clock"></i>
        </div>
        <p className='TechnicalOptions__option__text'>
          Revisar mis consultas previas
        </p>
      </div>
    </div>
  )
}

export default TechnicalOptions
