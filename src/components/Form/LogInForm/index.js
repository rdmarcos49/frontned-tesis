// @packages
import { useState } from 'react'
import { Link, useLocation } from 'wouter'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import ButtonsWrapper from 'components/ButtonsWrapper'
// @services
import logInService from 'services/logInService'
// @constants
import { URL } from 'constants/urls'
// @styles
// import './styles.scss'

export function LogInForm() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

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
    <Form onSubmit={handleOnSubmit}>
      <Input
        autoFocus
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
        <Button onClick={redirectToSignIn} type='button'> Solicitar Registro </Button>
        <Button> Log in </Button>
      </ButtonsWrapper>
    </Form>
  )
}
