// @packages
import PropTypes from 'prop-types'
// @components
import Error from 'components/Error'

const AuthWrapper = ({ isLoading, user, children }) => {

  if (isLoading) return <p>Cargando...</p>

  return (
    user.role //TODO: refactor
    ? children
    : <Error />
  )
}

export default AuthWrapper

AuthWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}
