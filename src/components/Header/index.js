// @packages
import React from 'react'
import {useLocation} from 'wouter'
// @styles
import './styles.scss'

const Header = ({ name, profileImage, role }) => {
  
  const [, setLocation] = useLocation()

  const handleLogOut = () => {
    // elimino la cookie
    setLocation('/login')
  }

  const getUserRole = (roleValue) => {
    switch (roleValue) {
      case 'ophthalmologist':
        return 'Oftalmólogo/a'
      case 'technical':
        return 'Técnico/a de captura'
      case 'admin':
        return 'Administrador/a'
      case 'onlyRead':
        return 'Solo lectura'
      default:
        return 'Default'
    }
  }

  const safetyName = name || 'Juan Perez'
  const safetyImage = profileImage || 'assets/default-profile-image.png'
  const safetyRole = getUserRole(role)

  return (
    <div className='Header'>
      <div className='Header__logout'><span onClick={handleLogOut}>Logout</span></div>
      <div className='Header__text-wrapper'>
        <p className='Header__text-wrapper__name'>
          {safetyName}
        </p>
        <p className='Header__text-wrapper__role'>
          {safetyRole}
        </p>
      </div>
      <div className='Header__image-wrapper'>
        <img
          alt='profile'
          className='Header__image-wrapper__image'
          src={safetyImage}
          title='profile'
        />
      </div>
    </div>
  )
}

export default Header
