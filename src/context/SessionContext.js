// @packages
import { useState, useEffect, createContext } from 'react'
// @services
import getUserService from 'services/getUserService'
// @constants
import { initialUserData, userHasNotFetchedYet, theIdIsNotNull } from 'constants/initialUserData'

const Context = createContext({})

export function SessionContextProvider ({ children }) {
  const [userData, setUserData] = useState({ ...initialUserData })
  const [jwt, setJwt] = useState(
    () => window.sessionStorage.getItem('jwt')
  )

  useEffect(() => {
    const id = window.sessionStorage.getItem('id')
    if (theIdIsNotNull(id) && userHasNotFetchedYet(userData)) {
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
