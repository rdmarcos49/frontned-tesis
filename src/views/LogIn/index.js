// @packages
import { useLocation } from 'wouter'
// @components
import AlreadyLogged from 'components/AlreadyLogged'
import { LogInForm } from 'components/Form/LogInForm'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { publicUrl } from 'constants/urls'
// @styles
import './styles.scss'

function LogIn() {
  const [location] = useLocation();

  const { isLoading, isLogged } = useUser()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (!isLoading && isLogged) {
    return <AlreadyLogged path={publicUrl[location]} />
  }

  return (
    <div className='Login'>
      <LogInForm />
    </div>
  )
}

export default LogIn
