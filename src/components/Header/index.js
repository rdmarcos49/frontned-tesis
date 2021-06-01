// @packages
import React from 'react'
import { Link } from 'wouter'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { ROLES } from 'constants/roles'
import { URL } from 'constants/urls'
// @styles
import styles from './Header.module.scss'

function Header() {
  
  const { isLogged, logOut } = useUser()

  const handleLogOut = () => {
    logOut()
  }

  const getUserRole = (roleValue) => {
    switch (roleValue) {
      case ROLES.OPHTHALMOLOGIST:
        return 'Oftalmólogo/a'
      case ROLES.TECHNICAL:
        return 'Técnico/a de captura'
      case ROLES.ADMIN:
        return 'Administrador/a'
      case ROLES.ONLY_READ:
        return 'Solo lectura'
      default:
        return 'Default'
    }
  }

  return (
    <div className={styles.Header}>
      {isLogged
        ?
          <Link onClick={handleLogOut} to={URL.LOG_IN}>Log out</Link>
        :
          <>
            <Link to={URL.LOG_IN}>Log in</Link>
            <Link to={URL.SIGN_IN}>Sign in</Link>
          </>
      }
    </div>
  )
}

export default Header
