// @packages
import { Link } from 'wouter'
// @components
import PublicWrapper from 'components/PublicWrapper'
// @hooks
import useUser from 'hooks/useUser'
// @styles
import './styles.scss'

function Welcome() {
  const { isLoading, isLogged } = useUser()

  return (
    <PublicWrapper isLoading={isLoading} isLogged={isLogged}>
      <div className='Welcome'>
        <h1 className='Welcome__title'>Welcome</h1>
        <Link className='Welcome__link-to-login' href='/login'>Ir a "Log in"!</Link>
        <Link className='Welcome__link-to-login' href='/signin'>Ir a "Sign in"!</Link>
      </div>
    </PublicWrapper>
  )
}

export default Welcome
