// @packages
import React from 'react'
import {useLocation} from 'wouter'
// @components
import Badge from 'components/Badge'
// @styles
import './styles.scss'

function Header({ name, profileImage, role }) {
  
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
      <Badge disabled>Logout</Badge>
      <Badge>{safetyName} </Badge>
      <Badge>{safetyRole}</Badge>
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
