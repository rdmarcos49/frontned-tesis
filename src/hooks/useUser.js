// @packages
import { useCallback, useContext, useState } from 'react'
import { useLocation } from 'wouter'
// @contexts
import SessionContext from 'context/SessionContext'
// @services
import loginService from 'services/loginService'
// @constants
import { URL } from 'constants/urls'

export default function useUser() {
  const { userData, jwt, setJwt } = useContext(SessionContext)
  const [status, setStatus] = useState({ loading: false, error: false })
  const [, setLocation] = useLocation()

  const login = useCallback(({ username, password }) => {
    setStatus({ loading: true, error: false })
    loginService({ username, password })
      .then(response => {
        window.sessionStorage.setItem('jwt', response.jwt)
        setJwt(response.jwt)
        setStatus({ loading: false, error: false })
        setLocation(URL.HOME)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        setStatus({ loading: false, error: true })
        console.error(err)
      })
  }, [setJwt, setLocation])

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
