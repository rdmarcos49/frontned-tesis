// @packages
import { useState, useEffect, createContext } from 'react'
// @services
import getUserService from 'services/getUserService'
// @constants
import { initialUserData, userHasNotFetchedYet } from 'constants/initialUserData'

const Context = createContext({})

export function SessionContextProvider ({ children }) {
  const [userData, setUserData] = useState({ ...initialUserData })
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt')
  )

  useEffect(() => {
    if (!jwt) return setJwt(null)
    if (userHasNotFetchedYet(userData)) {
      const id = window.sessionStorage.getItem('id')
      getUserService({ id, jwt })
        .then(response => setUserData({ ...response.user }))
        .catch(err => console.error(err))
    }
  }, [jwt, userData])
 
  return <Context.Provider value={{
    userData,
    jwt,
    setUserData,
    setJwt,
  }}>
    {children}
  </Context.Provider>
}

export default Context
