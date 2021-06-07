// @packages
import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import ButtonsWrapper from 'components/ButtonsWrapper'
import AlreadyLogged from 'components/AlreadyLogged'
// @services
import logInService from 'services/logInService'
// @hooks
import useUser from 'hooks/useUser'
// @constants
import { URL, publicUrl } from 'constants/urls'
// @styles
import './styles.scss'

function LogIn() {
  const [location, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })
  const { isLoading, isLogged } = useUser()

  if (!isLoading && isLogged) {
    return <AlreadyLogged path={publicUrl[location]} />
  }
  

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const result = await logInService(formData)
    if (result) {
      setLocation(URL.HOME)
    }
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
          onChange={handleChangeField}
          placeholder='juanperez123'
          type='text'
          value={formData.username}
        />

        <Input
          error={undefined}
          label='Contraseña'
          name='password'
          onChange={handleChangeField}
          placeholder='••••••••••••••'
          type='password'
          value={formData.password}
        />

        <Link href='/password-recovery' className="Login__forgot-password">¿Ha olvidado su contraseña?</Link>

        <ButtonsWrapper>
          <Button onClick={redirectToSignIn}> Solicitar Registro </Button>
          <Button> Log in </Button>
        </ButtonsWrapper>
      </Form>
      
    </div>
  )
}

export default LogIn
