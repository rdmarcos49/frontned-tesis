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
    async function fetchAndSetUser(jwt) {
      const userFetched = await getUserService(jwt)
      setUser(userFetched.user)
    }
    if (!user) {
      const cookies = new Cookies()
      const jwt = cookies.get('sessionCookie')
      
      if (jwt) {
        fetchAndSetUser(jwt)
          .then(() => console.log('Logged!'))
          .catch(e => console.warn(e))
      }
    }
    setIsLoading(false)
  }, [user, setUser])

  const logOut = () => {
    setUser(null)
    const cookies = new Cookies()
    cookies.remove('sessionCookie')
  }

  return {
    logOut,
    isLogged: (Boolean(user)),
    isLoading,
    user,
  }
}
