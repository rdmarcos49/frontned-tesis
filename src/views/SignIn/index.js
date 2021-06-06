// @packages
import React, { useState } from 'react'
// @components
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import { InputFileAvatar } from 'components/InputFile/InputFileAvatar'
// @hooks
import { useForm } from './hook'
// @services
import signInService from 'services/signInService'
// @constants
import { ROLES } from 'constants/roles'
// @styles
import './styles.scss'

function LogIn() {
  const {
    formData,
    formErrors,
    clearAllFields,
    handleChange,
    handleFocus,
    handleErrors,
  } = useForm()
  const [avatar, setAvatar] = useState(null)
  
  const options = [
    { value: ROLES.ADMIN, text: 'Administrador/a' },
    { value: ROLES.ONLY_READ, text: 'Solo lectura' },
    { value: ROLES.OPHTHALMOLOGIST, text: 'Oftalmólogo/a' },
    { value: ROLES.TECHNICAL, text: 'Técnico/a de captura' },
  ]

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

  return (
    <div className='Signin'>
      <Form onHandleSubmit={handleOnSubmit}>
        <div className='Signin__form-section'>
          <div className='Signin__form-section__inputs'>
            <Input
              error={formErrors.name}
              label='Nombre'
              name='name'
              onFocus={handleFocus}
              onChange={handleChange}
              onBlur={handleErrors}
              placeholder='Juan'
              type='text'
              value={formData.name}
            />

            <Input
              error={formErrors.lastname}
              label='Apellido'
              name='lastname'
              onFocus={handleFocus}
              onChange={handleChange}
              onBlur={handleErrors}
              placeholder='Perez'
              type='text'
              value={formData.lastname}
            />
          </div>
          <InputFileAvatar callback={handleChangeAvatar} accept='.png, .jpg, .jpeg' />
        </div>

        <Input
          error={formErrors.email}
          label='Correo electrónico'
          name='email'
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleErrors}
          placeholder='juanperez123@gmail.com'
          type='text'
          value={formData.email}
        />

        <Input
          error={formErrors.username}
          label='Usuario'
          name='username'
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleErrors}
          placeholder='juanperez123'
          type='text'
          value={formData.username}
        />

        <Input
          error={formErrors.password}
          label='Contraseña'
          name='password'
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleErrors}
          placeholder='••••••••••••••'
          type='password'
          value={formData.password}
        />

        <Input
          error={formErrors.repeatPassword}
          label='Repetir contraseña'
          name='repeatPassword'
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleErrors}
          placeholder='••••••••••••••'
          type='password'
          value={formData.repeatPassword}
        />

        <Select
          disabledText='Selecciona un rol'
          label='Rol'
          name='role'
          onFocus={handleFocus}
          onChange={handleChange}
          onBlur={handleErrors}
          options={options}
          placeholder='Rol'
          type='select'
          value={formData.role}
        />

        <ButtonsWrapper>
          <Button onClick={clearAllFields}> Borrar Datos </Button>
          <Button> Solicitar registro </Button>
        </ButtonsWrapper>
      </Form>
    </div>
  )
}

export default LogIn
