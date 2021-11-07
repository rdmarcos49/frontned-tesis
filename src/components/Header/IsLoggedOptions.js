// @packages
import PropTypes from 'prop-types'
// @components
import Avatar from 'components/Avatar'
// @constants
import { URL } from 'constants/urls'
// @styles
import {
  NavigationWrapper,
  AvatarWrapper,
  AvatarName,
  Link,
  Role,
} from './styles'

export function IsLoggedOptions({ avatar, name, lastname, handleLogOut, role}) {
  return (
    <>
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
        <Role>({role})</Role>
        <Avatar
          avatar={avatar}
          name={name}
          lastname={lastname}
        />
      </AvatarWrapper>
    </>
  )
}

IsLoggedOptions.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  handleLogOut: PropTypes.func
}
