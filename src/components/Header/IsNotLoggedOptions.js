// @constants
import { URL } from 'constants/urls'
// @styles
import { NavigationWrapper, Link } from './styles'

export function IsNotLoggedOptions() {
  return (
    <NavigationWrapper>
      <Link to={URL.LOG_IN}>Log in</Link>
      <Link to={URL.SIGN_IN}>Sign in</Link>
    </NavigationWrapper>
  )
}
