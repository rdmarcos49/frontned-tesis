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
import ErrorPage from 'views/Error'
// @components
import Header from 'components/Header'
import MainLayout from 'components/MainLayout'
import Footer from 'components/Footer'
// @contexts
import { SessionContextProvider } from 'context/SessionContext'
// @constants
import { URL } from 'constants/urls'
// @styles
import './styles.scss'

const App = () => {
  return(
    <SessionContextProvider>
      <Header />
      <MainLayout>
        <Switch>
          <Route path={URL.BASE_PATH} component={ Welcome } />
          <Route path={URL.LOG_IN} component={ LogIn } />
          <Route path={URL.SIGN_IN} component={ SignIn } />
          <Route path={URL.HOME} component={ Home } />
          <Route path={URL.PASSWORD_RECOVERY} component={ PasswordRecovery } />
          <Route path={URL.NEW_PATIENT} component={ NewPatient } />
          <Route path={URL.REST} component={ ErrorPage } />
        </Switch>
      </MainLayout>
      <Footer />
    </SessionContextProvider>
  )
}

export default App
