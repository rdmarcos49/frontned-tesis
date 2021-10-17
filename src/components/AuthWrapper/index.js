// @packages
import PropTypes from 'prop-types'
// @components
import Error from 'components/Error'
import Loading from 'components/Loading/index'

const AuthWrapper = ({ isLoading, user, children }) => {

  return (
    user.role //TODO: refactor
    ? 
      <>
        {children}
        {isLoading ? <Loading /> : null}
      </>
    : <Error />
  )
}

export default AuthWrapper

AuthWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}
