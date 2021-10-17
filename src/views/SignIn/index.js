// @components
import { SignInForm } from 'components/Form/SignInForm'
import PublicWrapper from 'components/PublicWrapper'
// @hooks
import useUser from 'hooks/useUser'
// @styles
import './styles.scss'

function LogIn() {
  const { isLoading, isLogged } = useUser()

  return (
    <PublicWrapper isLoading={isLoading} isLogged={isLogged}>
      <div className='Signin'>
        <SignInForm />
      </div>
    </PublicWrapper>
  )
}

export default LogIn
