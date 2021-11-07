// @packages
import PropTypes from 'prop-types'
// @styles
import { Image, LettersAsAvatar } from './styles'

function Avatar({ avatar, name, lastname }) {
  if (avatar) return <Image alt='avatar' src={avatar}/>

  return (
    <LettersAsAvatar>
      {name.charAt(0).toUpperCase()}{lastname.charAt(0).toUpperCase()}
    </LettersAsAvatar>
  )
}

export default Avatar

Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  avatar: PropTypes.string
}
