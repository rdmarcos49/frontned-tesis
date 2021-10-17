// @packages
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import PropTypes from 'prop-types'
// @components
import Loading from 'components/Loading/index'
// @constans
import { URL } from 'constants/urls'

const PublicWrapper = ({ isLoading, isLogged, children }) => {
  const [,setLocation] = useLocation()

  useEffect(() => {
    if (isLogged) {
      setLocation(URL.HOME)
    }
  }, [isLogged, setLocation])

  return (
    <>
      {children}
      {isLoading ? <Loading /> : null}
    </>
  )
}

export default PublicWrapper

PublicWrapper.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired
}
