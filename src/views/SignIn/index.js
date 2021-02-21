// @packages
import React, { useState, useRef } from 'react'
// @components
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
// @services
import signInService from 'services/signInService'
// @utils
import { requiredField, validLastname, validName, validUsername, validPassword, validRepeatPassword, validEmail } from 'utils/regex'
// @styles
import './styles.scss'

const LogIn = () => {
  const [image, setImage] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
    role: '',
  })
  const [formErrors, setFormErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    repeatPassword: '',
    role: '',
  })
  const inputFileRef = useRef(null)
  
  const options = [
    {value: 'ophthalmologist', text: 'Oftalmólogo/a'},
    {value: 'technical', text: 'Técnico/a de captura'},
    {value: 'admin', text: 'Administrador/a'},
    {value: 'onlyRead', text: 'Solo lectura'},
  ]

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    signInService(formData)
  }

  const clearAllTheFields = () => {
    setFormData({
      name: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      role: '',
    })
    setFormErrors({
      name: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      repeatPassword: '',
      role: '',
    })
  }

  const handleProfileImageChanged = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (!!file) {
      const newImage = URL.createObjectURL(file)
      setImage(newImage) 
    }
  }

  const handleChangeOfImage = () => {
    inputFileRef.current.click()
  }

  const handleClearErrorForFocus = (e) => {
    const field = e.target.name
    setFormErrors({
      ...formErrors,
      [field]: undefined,
    })
  }

  const handleChangeField = (e) => {
    const field = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const checkForErrors = (value, regexs) => {
    for (const regex of regexs) {
      const result = regex(value)
      if (!!result) {
        return result
      }
    }
    return undefined
  }

  const handleErrors = (e) => {
    const field = e.target.name
    const value = e.target.value
    const {password} = formData
    let result = undefined
    switch (field) {
      case 'name':{
        result = checkForErrors(value, [requiredField, validName])
        break
      }
      case 'lastname':{
        result = checkForErrors(value, [requiredField, validLastname])
        break
      }
      case 'email':{
        result = checkForErrors(value, [requiredField, validEmail])
        break
      }
      case 'username':{
        result = checkForErrors(value, [requiredField, validUsername])
        break
      }
      case 'password':{
        result = checkForErrors(value, [requiredField, validPassword])
        break
      }
      case 'repeatPassword':{
        result = checkForErrors(value, [requiredField, validRepeatPassword(password)])
        break
      }
      case 'role':{
        result = checkForErrors(value, [requiredField])
        break
      }
      default:
        result = undefined
    }
    setFormErrors({
      ...formErrors,
      [field]: result
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
              onClearErrorsForFocus={handleClearErrorForFocus}
              onHandleChangeField={handleChangeField}
              onHandleErrors={handleErrors}
              placeholder='Juan'
              type='text'
              value={formData.name}
            />

            <Input
              error={formErrors.lastname}
              label='Apellido'
              name='lastname'
              onClearErrorsForFocus={handleClearErrorForFocus}
              onHandleChangeField={handleChangeField}
              onHandleErrors={handleErrors}
              placeholder='Perez'
              type='text'
              value={formData.lastname}
            />
          </div>
          <div className='Signin__form-section__image-wrapper'>
            <img
              alt='profile'
              className='Signin__form-section__image-wrapper__image'
              src={`${image !== null ? image : 'assets/default-profile-image.png'}`}
            />
            <input
              accept='.png, .jpg, .jpeg'
              className='Signin__form-section__image-wrapper__input--hide'
              onChange={handleProfileImageChanged}
              ref={inputFileRef}
              type='file'
            />
            <Button
              callback={handleChangeOfImage}
              size='small'
              tabIndex='-1'
              type='Button'
            >
              Seleccionar archivo
            </Button>
          </div>
        </div>

        <Input
          error={formErrors.email}
          label='Correo electrónico'
          name='email'
          onClearErrorsForFocus={handleClearErrorForFocus}
          onHandleChangeField={handleChangeField}
          onHandleErrors={handleErrors}
          placeholder='juanperez123@gmail.com'
          type='text'
          value={formData.email}
        />

        <Input
          error={formErrors.username}
          label='Usuario'
          name='username'
          onClearErrorsForFocus={handleClearErrorForFocus}
          onHandleChangeField={handleChangeField}
          onHandleErrors={handleErrors}
          placeholder='juanperez123'
          type='text'
          value={formData.username}
        />

        <Input
          error={formErrors.password}
          label='Contraseña'
          name='password'
          onClearErrorsForFocus={handleClearErrorForFocus}
          onHandleChangeField={handleChangeField}
          onHandleErrors={handleErrors}
          placeholder='••••••••••••••'
          type='password'
          value={formData.password}
        />

        <Input
          error={formErrors.repeatPassword}
          label='Repetir contraseña'
          name='repeatPassword'
          onClearErrorsForFocus={handleClearErrorForFocus}
          onHandleChangeField={handleChangeField}
          onHandleErrors={handleErrors}
          placeholder='••••••••••••••'
          type='password'
          value={formData.repeatPassword}
        />

        <Select
          disabledText='Selecciona un rol'
          label='Rol'
          name='role'
          onClearErrorsForFocus={handleClearErrorForFocus}
          onHandleChangeField={handleChangeField}
          onHandleErrors={handleErrors}
          options={options}
          placeholder='Rol'
          type='select'
          value={formData.role}
        />

        <ButtonsWrapper>
          <Button callback={clearAllTheFields} type='button'> Borrar Datos </Button>
          <Button type='submit'> Solicitar registro </Button>
        </ButtonsWrapper>
      </Form>
    </div>
  )
}

export default LogIn
