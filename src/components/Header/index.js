// @hooks
import useUser from 'hooks/useUser'
// @constants
// import { ROLES } from 'constants/roles'
// @styles
import styles from './Header.module.scss'
import { IsLoggedOptions } from './IsLoggedOptions'
import { IsNotLoggedOptions } from './IsNotLoggedOptions'

function Header() {
  const { isLoading, isLogged, userData, logout } = useUser()
  /*
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
  */

  return (
    <header className={styles.Header}>
      {isLoading || !isLogged
        ?
        <IsNotLoggedOptions />
        :
        <IsLoggedOptions
          avatar={userData.avatar}
          name={userData.name}
          lastname={userData.lastname}
          handleLogOut={logout}
        />
      }
    </header>
  )
}

export default Header
