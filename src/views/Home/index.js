// @components
import { AdminOptions } from 'components/UserOptions/AdminOptions'
import { TechnicalOptions } from 'components/UserOptions/TechnicalOptions'
import Error from 'views/Error'
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
  const { isLoading, isLogged, userData } = useUser()
  
  if (isLoading) return <p>Cargando...</p>

  const { role } = userData

  return (
    isLogged
    ?
      <div className='Home'>
        <div className='Home__logo-wrapper'>
          <img
            alt='logo'
            className='Home__logo-wrapper__logo'
            src='assets/logo-blue-yellow.png'
            title='logo'
          />
        </div>
        <h2 className='Home__title'>Bienvenido/a a Retinar</h2>
        <h3 className='Home__subtitle'>¿Que desea hacer hoy?</h3>
        <UserOptions options={MenuRoles[role]}/>
      </div>
    :
      <Error />
  )
}

export default Home
