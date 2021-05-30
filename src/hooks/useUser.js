// @packages
import { useContext, useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import { useLocation } from "wouter";
// @contexts
import SessionContext from 'context/SessionContext'
// @services
import getUserService from 'services/getUserService'

export default function useUser() {
  const { user, setUser } = useContext(SessionContext)
  const [isLoading, setIsLoading] = useState(true)
  const [, setLocation] = useLocation()
  
  useEffect(() => {
    async function fetchAndSetUser(jwt) {
      const userFetched = await getUserService(jwt)
      setUser(userFetched.user)
      setIsLoading(false)
    }
    if (!user) {
      const cookies = new Cookies()
      const jwt = cookies.get('sessionCookie')
      
      if (jwt) {
        fetchAndSetUser(jwt)
      } else {
        setIsLoading(false)
      }
    } else {
      setIsLoading(false)
    }
  }, [user, setUser, setLocation])

  return {
    isLogged: (Boolean(user)),
    isLoading,
    user,
  }
}
