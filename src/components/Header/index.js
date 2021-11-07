// @hooks
import useUser from 'hooks/useUser'
// @components
import { IsNotLoggedOptions } from './IsNotLoggedOptions'
import { IsLoggedOptions } from './IsLoggedOptions'
// @styles
import { HeaderContainer } from './styles'

function Header() {
  const { isLogged, userData, logout } = useUser()
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
    <HeaderContainer>
      {!isLogged
        ?
        <IsNotLoggedOptions />
        :
        <IsLoggedOptions
          avatar={userData.avatar}
          name={userData.name}
          lastname={userData.lastname}
          handleLogOut={logout}
          role={userData.role}
        />
      }
    </HeaderContainer>
  )
}

export default Header
