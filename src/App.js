// @packages
import React from 'react'
import { Route, Switch } from 'wouter'
// @views
import Welcome from 'views/Welcome'
import LogIn from 'views/LogIn'
import SignIn from 'views/SignIn'
import Home from 'views/Home'
import PasswordRecovery from 'views/PasswordRecovery'
import NewPatient from 'views/NewPatient'
// @contexts
import {SessionContextProvider} from 'context/SessionContext'
// @styles
import './styles.scss'

const App = () => {
  return(
    <SessionContextProvider>
      <Switch>
        <Route path="/" component={ Welcome } />
        <Route path='/login' component={ LogIn } />
        <Route path='/signin' component={ SignIn } />
        <Route path='/home' component={ Home } />
        <Route path='/passwordrecovery' component={ PasswordRecovery } />
        <Route path='/newpatient' component={ NewPatient } />
      </Switch>
    </SessionContextProvider>
  )
}

export default App
