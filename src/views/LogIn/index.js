// @packages
import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import ButtonsWrapper from 'components/ButtonsWrapper'
// @services
import logInService from 'services/logInService'
// @styles
import './styles.scss'

const LogIn = () => {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    logInService(formData)
  }

  const handleChangeField = (e) => {
    const field = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const redirectToSignIn = () => {
    setLocation('/signin')
  }

  return (
    <div className='Login'>
      <Form onHandleSubmit={handleOnSubmit}>
        <Input
          error={undefined}
          label='Usuario'
          name='username'
          onClearErrorsForFocus={() => {}}
          onHandleChangeField={handleChangeField}
          onHandleErrors={() => {}}
          placeholder='juanperez123'
          type='text'
          value={formData.username}
        />

        <Input
          error={undefined}
          label='Contraseña'
          name='password'
          onClearErrorsForFocus={() => {}}
          onHandleChangeField={handleChangeField}
          onHandleErrors={() => {}}
          placeholder='••••••••••••••'
          type='password'
          value={formData.password}
        />

        <Link href='/passwordrecovery' className="Login__forgot-password">¿Ha olvidado su contraseña?</Link>

        <ButtonsWrapper>
          <Button onClick={redirectToSignIn}> Solicitar Registro </Button>
          <Button> Log in </Button>
        </ButtonsWrapper>
      </Form>
      
    </div>
  )
}

export default LogIn
