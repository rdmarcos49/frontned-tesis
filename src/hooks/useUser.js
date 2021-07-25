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
  const { userData, setUserData, jwt, setJwt } = useContext(SessionContext)
  const [status, setStatus] = useState({ loading: false, error: false })
  const [, setLocation] = useLocation()
  
  /*
  const user = useCallback(({ id }) => {
    setStatus({ loading: true, error: false })
    getUserService({ id, jwt })
      .then(response => {
        setUserData({ ...response.user })
        setStatus({ loading: false, error: false })
      })
      .catch(err => {
        setStatus({ loading: false, error: true })
        console.error(err)
      })
  }, [jwt, setUserData])
  */

  const login = useCallback(({ username, password }) => {
    setStatus({ loading: true, error: false })
    loginService({ username, password })
      .then(response => {
        setUserData({ ...response.user })
        setJwt(response.token)
        setStatus({ loading: false, error: false })
        window.sessionStorage.setItem('id', response.user.id)
        window.sessionStorage.setItem('jwt', response.token)
        setLocation(URL.HOME)
      })
      .catch(err => {
        window.sessionStorage.removeItem('jwt')
        window.sessionStorage.removeItem('id')
        setStatus({ loading: false, error: true })
        setUserData(null)
        setJwt(null)
        console.error(err)
      })
  }, [setJwt, setUserData, setLocation])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('jwt')
    window.sessionStorage.removeItem('id')
    setUserData(null)
    setJwt(null)
  }, [setJwt, setUserData])

  return {
    login,
    logout,
    userData,
    isLogged: Boolean(jwt),
    isLoading: status.loading,
  }
}
