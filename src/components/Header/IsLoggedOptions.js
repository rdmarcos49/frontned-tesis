// @packages
import { Link, useLocation } from 'wouter'
// @components
import Avatar from 'components/Avatar'
// @constants
import { URL } from 'constants/urls'
// @styles
import styles from './Header.module.scss'

export function IsLoggedOptions({ avatar, name, lastname, handleLogOut }) {
  const [, setLocation] = useLocation()
  const navToHome = () => {
    setLocation(URL.HOME)
  }
  return (
    <div className={styles.IsLoggedOptions}>
      <div>
        <img
          alt='nav to home'
          className={styles.RetinarLogo}
          src='assets/logo-white-yellow.png'
          onClick={navToHome}
        />
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
    </div>
  )
}
