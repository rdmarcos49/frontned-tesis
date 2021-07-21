// @packages
import { useState } from 'react'
// @components
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import { InputFileAvatar } from 'components/InputFile/InputFileAvatar'
// @services
import signInService from 'services/signInService'
// @constants
import { ROLES } from 'constants/roles'

export function SignInForm() {
  const [formData, setFormData] = useState({})
  const [avatar, setAvatar] = useState(null)

  const options = [
    { value: ROLES.ADMIN, text: 'Administrador/a' },
    { value: ROLES.ONLY_READ, text: 'Solo lectura' },
    { value: ROLES.OPHTHALMOLOGIST, text: 'Oftalmólogo/a' },
    { value: ROLES.TECHNICAL, text: 'Técnico/a de captura' },
  ]

  const clearAllFields = () => {
    const form = document.getElementsByTagName('form')[0]
    setFormData({})
    form.reset()
  }

  const handleChangeAvatar = croppedImage => {
    setAvatar(croppedImage)
  } 

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    
    await signInService({
      ...formData,
      avatar,
    })
  }

  const handleOnChange = (e) => {
    const { name: field, value } = e.target

    setFormData({
      ...formData,
      [field]: value,
    })
  }

  return (
    <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <div className='Signin__form-section'>
        <div className='Signin__form-section__inputs'>
          <Input
            autoFocus
            label='Nombre'
            name='name'
            placeholder='Juan'
            type='text'
          />

          <Input
            label='Apellido'
            name='lastname'
            placeholder='Perez'
            type='text'
          />
        </div>
        <InputFileAvatar callback={handleChangeAvatar} accept='.png, .jpg, .jpeg' />
      </div>

      <Input
        label='Correo electrónico'
        name='email'
        placeholder='juanperez123@gmail.com'
        type='text'
      />

      <Input
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

      <Input
        label='Repetir contraseña'
        name='repeatPassword'
        placeholder='••••••••••••••'
        type='password'
      />

      <Select
        defaultValue=''
        disabledText='Selecciona un rol'
        label='Rol'
        name='role'
        options={options}
        placeholder='Rol'
        type='select'
      />

      <ButtonsWrapper>
        <Button onClick={clearAllFields} type='button'> Borrar Datos </Button>
        <Button> Solicitar registro </Button>
      </ButtonsWrapper>
    </Form>
  )
}
