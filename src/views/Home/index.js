// @components
import { AdminOptions } from 'components/UserOptions/AdminOptions'
import { TechnicalOptions } from 'components/UserOptions/TechnicalOptions'
import { OphthalmologistOptions } from 'components/UserOptions/OphthalmologistOptions'
import AuthWrapper from 'components/AuthWrapper'
import UserOptions from 'components/UserOptions/index'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { ROLES } from 'constants/roles'
// @styles
import './styles.scss'

const MenuRoles = {
  [ROLES.ADMIN]: AdminOptions,
  [ROLES.TECHNICAL]: TechnicalOptions,
  [ROLES.OPHTHALMOLOGIST]: OphthalmologistOptions,
  // [ROLES.ONLY_READ]: OnlyReadOptions,
}

function Home() {
  const { isLoading, userData } = useUser()

  const { role } = userData

  return (
    <AuthWrapper isLoading={isLoading} user={userData}>
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
    </AuthWrapper>
  )
}

export default Home
