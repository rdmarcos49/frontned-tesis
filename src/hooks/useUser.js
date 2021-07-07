// @packages
import { useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
// @contexts
import SessionContext from 'context/SessionContext'
// @services
import getUserService from 'services/getUserService'

export default function useUser() {
  const { user, setUser } = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      const cookies = new Cookies()
      const jwt = cookies.get('sessionCookie')
      
      if (jwt) {
        getUserService(jwt)
          .then(response => {
            setUser(response.user)
            setIsLoading(false)
          })
          .catch(e => console.warn(e))
      } else {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }, [user, setUser])

  const logOut = () => {
    setUser(null)
    const cookies = new Cookies()
    cookies.remove('sessionCookie')
  }

  return {
    logOut,
    isLogged: user,
    isLoading,
    user,
  }
}
