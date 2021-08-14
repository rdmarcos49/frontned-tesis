// @packages
import { Link } from 'wouter'
import PropTypes from 'prop-types'
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

IsLoggedOptions.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  handleLogOut: PropTypes.func
}
