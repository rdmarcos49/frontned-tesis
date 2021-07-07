// @packages
import { useLocation } from 'wouter'
// @components
import AlreadyLogged from 'components/AlreadyLogged'
import { SignInForm } from 'components/Form/SignInForm'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { publicUrl } from 'constants/urls'
// @styles
import './styles.scss'

function LogIn() {
  const [location] = useLocation()
  const { isLoading, isLogged } = useUser()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (!isLoading && isLogged) {
    return <AlreadyLogged path={publicUrl[location]} />
  }

  return (
    <div className='Signin'>
      <SignInForm />
    </div>
  )
}

export default LogIn
