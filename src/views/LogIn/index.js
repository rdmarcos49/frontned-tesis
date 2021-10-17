// @components
import { LogInForm } from 'components/Form/LogInForm'
import PublicWrapper from 'components/PublicWrapper/index'
// @hooks
import useUser from 'hooks/useUser'
// @styles
import './styles.scss'

function LogIn() {
  const { isLoading, isLogged, login } = useUser()

  return (
    <PublicWrapper isLoading={isLoading} isLogged={isLogged}>
      <div className='Login'>
        <LogInForm login={login}/>
      </div>
    </PublicWrapper>
  )
}

export default LogIn
