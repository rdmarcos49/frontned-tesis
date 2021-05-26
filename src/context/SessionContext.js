// @packages
import React, { useState } from 'react'

const Context = React.createContext({})

export function SessionContextProvider ({ children }) {
  const [user, setUser] = useState(null)

  return <Context.Provider value={{ user, setUser }}>
    {children}
  </Context.Provider>
}

export default Context
