// @packages
import { Link } from 'wouter'
// @components
import Avatar from 'components/Avatar'
// @constants
import { URL } from 'constants/urls'
// @styles
import styles from './Header.module.scss'

export function IsLoggedOptions({ avatar, name, lastname, handleLogOut }) {
  return (
    <nav className={styles.IsLoggedOptions}>
      <div>
        <Link to={URL.HOME}>
          Home
        </Link>
        <Link onClick={handleLogOut} to={URL.LOG_IN}>
          Log out
        </Link>
      </div>
      <div>
        <span>{name}</span>
        <Avatar
          avatar={avatar}
          name={name}
          lastname={lastname}
        />
      </div>
    </nav>
  )
}
