// @constants
import { URL } from 'constants/urls'
// @styles
import styles from './Header.module.scss'
import { NavigationWrapper, Link } from './Header.styled'

export function IsNotLoggedOptions() {
  return (
    <NavigationWrapper className={styles.IsNotLoggedOptions}>
      <Link to={URL.LOG_IN}>Log in</Link>
      <Link to={URL.SIGN_IN}>Sign in</Link>
    </NavigationWrapper>
  )
}
