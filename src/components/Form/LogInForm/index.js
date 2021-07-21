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
  const [formData, setFormData] = useState({})

  const handleOnSubmit = async (e) => {
    e.preventDefault()

    await logInService({
      ...formData,
    })
  }

  const handleOnChange = (e) => {
    const { name: field, value } = e.target

    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const redirectToSignIn = () => {
    setLocation(URL.SIGN_IN)
  }

  return (
    <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <Input
        autoFocus
        label='Usuario'
        name='username'
        placeholder='juanperez123'
        type='text'
      />

      <Input
        label='Contraseña'
        name='password'
        placeholder='••••••••••••••'
        type='password'
      />

      <Link href='/password-recovery' className="Login__forgot-password">¿Ha olvidado su contraseña?</Link>

      <ButtonsWrapper>
        <Button onClick={redirectToSignIn} type='button'> Solicitar Registro </Button>
        <Button> Log in </Button>
      </ButtonsWrapper>
    </Form>
  )
}
