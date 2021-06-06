// @packages
import { Link } from 'wouter'
// @constants
import { URL } from 'constants/urls'
// @styles
import styles from './Header.module.scss'

export function IsNotLoggedOptions() {
  return (
    <div className={styles.IsNotLoggedOptions}>
      <Link to={URL.LOG_IN}>Log in</Link>
      <Link to={URL.SIGN_IN}>Sign in</Link>
    </div>
  )
}
