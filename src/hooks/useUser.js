// @packages
import { useCallback, useContext, useState } from 'react'
// @contexts
import AuthContext from 'context/AuthContext'
// @services
import loginService from 'services/logInService'

export default function useUser() {
  const { userData, jwt, setJwt } = useContext(AuthContext)
  const [status, setStatus] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }) => {
    setStatus({ loading: true, error: false })
    
    loginService({ username, password })
      .then((response) => {
        const { jwt: fetchedJwt } = response.data
        window.sessionStorage.setItem('jwt', fetchedJwt)
        setJwt(fetchedJwt)
        setStatus({ loading: false, error: false })
        return response
      })
      .catch((err) => {
        window.sessionStorage.removeItem('jwt')
        setStatus({ loading: false, error: true })
        console.error(err)
        return null
      })
  }, [setJwt])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    setJwt(null)
  }, [setJwt])

  return {
    login,
    logout,
    userData,
    isLogged: Boolean(jwt),
    isLoading: status.loading,
  }
}
