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
    <Form onSubmit={handleOnSubmit}>
      <div className='Signin__form-section'>
        <div className='Signin__form-section__inputs'>
          <Input
            autoFocus
            label='Nombre'
            onChange={handleOnChange}
            name='name'
            placeholder='Juan'
            type='text'
          />

          <Input
            label='Apellido'
            onChange={handleOnChange}
            name='lastname'
            placeholder='Perez'
            type='text'
          />
        </div>
        {/* in INPUTFILEAVATAR we can use as a child an img tag, avoiding all the logic inside the component */}
        {/* right now there is a very strange behavior with the thumbnail of the current selected avatar */}
        {/* TODO: refactor that */}
        <InputFileAvatar callback={handleChangeAvatar} accept='.png, .jpg, .jpeg' />
      </div>

      <Input
        label='Correo electrónico'
        name='email'
        onChange={handleOnChange}
        placeholder='juanperez123@gmail.com'
        type='text'
      />

      <Input
        label='Usuario'
        name='username'
        onChange={handleOnChange}
        placeholder='juanperez123'
        type='text'
      />

      <Input
        label='Contraseña'
        name='password'
        onChange={handleOnChange}
        placeholder='••••••••••••••'
        type='password'
      />

      <Input
        label='Repetir contraseña'
        name='repeatPassword'
        onChange={handleOnChange}
        placeholder='••••••••••••••'
        type='password'
      />

      <Select
        defaultValue=''
        disabledText='Selecciona un rol'
        label='Rol'
        name='role'
        onChange={handleOnChange}
        options={options}
        placeholder='Rol'
        type='select'
      />

      <ButtonsWrapper>
        <Button size='medium' onClick={clearAllFields} type='button'> Borrar Datos </Button>
        <Button size='medium'> Solicitar registro </Button>
      </ButtonsWrapper>
    </Form>
  )
}
