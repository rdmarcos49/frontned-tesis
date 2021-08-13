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
