// @hooks
import useUser from 'hooks/useUser'
// @constants
import { ROLES } from 'constants/roles'
// @styles
import styles from './Header.module.scss'
import { IsLoggedOptions } from './IsLoggedOptions'
import { IsNotLoggedOptions } from './IsNotLoggedOptions'

function Header() {
  
  const { isLogged, user, logOut } = useUser()
  

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
    <header className={styles.Header}>
      {isLogged
        ?
          <IsLoggedOptions
            avatar={user.avatar}
            name={user.name}
            lastname={user.lastname}
            handleLogOut={logOut}
          />
        :
          <IsNotLoggedOptions />
      }
    </header>
  )
}

export default Header
