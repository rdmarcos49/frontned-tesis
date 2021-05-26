// @packages
import { useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
// @contexts
import SessionContext from 'context/SessionContext'
// @services
import getUserService from 'services/getUserService'

export default function useUser() {
  const {user, setUser} = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)
    if (!user) {
      const cookies = new Cookies()
      const jwt = cookies.get('sessionCookie')
      console.log(jwt)
      if (jwt) {
        const userFetched = getUserService(jwt)
        setUser(userFetched)
      }
    }
    setIsLoading(false)
  }, [user, setUser])

  return {
    user,
    isLoading,
  }
}
