// @packages
import { Link } from 'wouter'
// @constants
import { URL } from 'constants/urls'
// @styles
import styles from './Header.module.scss'

export function IsLoggedOptions({ avatar, name, lastname, handleLogOut }) {
  return (
    <div className={styles.IsLoggedOptions}>
      <div>
        <Link onClick={handleLogOut} to={URL.LOG_IN}>
          Log out
        </Link>
      </div>
      <div>
        <span>{name}</span>
        {avatar
          ?
            <img alt='avatar' src={avatar}/>
          :
            <p>{name.charAt(0)}{lastname.charAt(0)}</p>
        }
      </div>
    </div>
  )
}
