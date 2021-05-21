// @packages
import React, { useState, useRef } from 'react'
// @components
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import ModalCrop from './ModalCrop'
// @hooks
import { useForm } from './hook'
// @services
import signInService from 'services/signInService'
// @styles
import './styles.scss'

function LogIn() {
  const [image, setImage] = useState(null)
  const [croppedAvatar, setCroppedAvatar] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  const {
    formData,
    formErrors,
    clearAllFields,
    handleChange,
    handleFocus,
    handleErrors,
  } = useForm()
  
  const inputFileRef = useRef(null)
  
  const options = [
    {value: 'ophthalmologist', text: 'Oftalmólogo/a'},
    {value: 'technical', text: 'Técnico/a de captura'},
    {value: 'admin', text: 'Administrador/a'},
    {value: 'onlyRead', text: 'Solo lectura'},
  ]

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    await signInService({
      ...formData,
      avatar: croppedAvatar,
    })
  }

  const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

  const resetInputFile = () => {
    inputFileRef.current.value = ''
  }

  const handleProfileImageChanged = async (e) => {
    const file = e.target.files[0]
    if (!!file) {
      const base64NewImage = await getBase64(file)
      setImage(base64NewImage) 
    }
    setIsOpen(true)
    resetInputFile()
  }

  const handleChangeOfImage = () => {
    inputFileRef.current.click()
  }

  const handleCancelCrop = () => {
    setIsOpen(false)
    setImage(null)
  }

  const handleCroppedAvatar = (newAvatar) => {
    setCroppedAvatar(newAvatar)
    setIsOpen(false)
  }

  return (
    <div className='Signin'>
      <ModalCrop cancelCrop={handleCancelCrop} handleCroppedAvatar={handleCroppedAvatar} isOpen={isOpen} src={image}/>
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
          <div className='Signin__form-section__image-wrapper'>
            <img
              alt='profile'
              className='Signin__form-section__image-wrapper__image'
              id='imageid'
              src={`${croppedAvatar !== null ? croppedAvatar : 'assets/default-profile-image.png'}`}
            />
            <input
              accept='.png, .jpg, .jpeg'
              className='Signin__form-section__image-wrapper__input--hide'
              onChange={handleProfileImageChanged}
              ref={inputFileRef}
              type='file'
            />
            <Button
              onClick={handleChangeOfImage}
              size='small'
              type='button'
              tabIndex='-1'
            >
              Seleccionar archivo
            </Button>
          </div>
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
