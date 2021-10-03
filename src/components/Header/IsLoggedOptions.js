// @packages
import PropTypes from 'prop-types'
// @components
import Avatar from 'components/Avatar'
// @constants
import { URL } from 'constants/urls'
// @styles
import {
  LoggedInWrapper,
  NavigationWrapper,
  AvatarWrapper,
  AvatarName,
  Link,
} from './Header.styled'

export function IsLoggedOptions({ avatar, name, lastname, handleLogOut }) {
  return (
    <LoggedInWrapper>
      <NavigationWrapper>
        <Link to={URL.HOME}>
          Home
        </Link>
        <Link onClick={handleLogOut} to={URL.LOG_IN}>
          Log out
        </Link>
      </NavigationWrapper>
      <AvatarWrapper>
        <AvatarName>{name}</AvatarName>
        <Avatar
          avatar={avatar}
          name={name}
          lastname={lastname}
        />
      </AvatarWrapper>
    </LoggedInWrapper>
  )
}

IsLoggedOptions.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  handleLogOut: PropTypes.func
}
