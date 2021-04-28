// @packages
import React, { useState, useRef } from 'react'
// @components
import Form from 'components/Form'
import Button from 'components/Button'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
// @services
import { addProfileImageToFirebase } from 'firebase/client'
// @hooks
import { useSignInForm } from './hook'
// @styles
import './styles.scss'

const LogIn = () => {
  const [image, setImage] = useState(null)
  const [imageInformation, setImageInformation] = useState(null)
  const {
    formData,
    formErrors,
    handleFocus,
    handleBlur,
    handleChange,
    clearForm,
  } = useSignInForm()

  const inputFileRef = useRef(null)
  
  const options = [
    {value: 'ophthalmologist', text: 'Oftalmólogo/a'},
    {value: 'technical', text: 'Técnico/a de captura'},
    {value: 'admin', text: 'Administrador/a'},
    {value: 'onlyRead', text: 'Solo lectura'},
  ]

  function getBase64Image(img) {
    let canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    let dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    const newInformation = {...formData, image: imageInformation}
    console.log(newInformation)
    // addProfileImageToFirebase(imageInformation)
    const base64 = getBase64Image(document.getElementById("imageid"));
    console.log(base64)
  }

  const handleProfileImageChanged = (e) => {
    const file = e.target.files[0];
    console.log(file)
    if (!!file) {
      const newImage = URL.createObjectURL(file)
      setImage(newImage) 
      setImageInformation(e.target.files[0])
    }
  }

  const handleChangeOfImage = () => {
    inputFileRef.current.click()
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
              onClearErrorsForFocus={handleFocus}
              onHandleChangeField={handleChange}
              onHandleErrors={handleBlur}
              placeholder='Juan'
              type='text'
              value={formData.name}
            />

            <Input
              error={formErrors.lastname}
              label='Apellido'
              name='lastname'
              onClearErrorsForFocus={handleFocus}
              onHandleChangeField={handleChange}
              onHandleErrors={handleBlur}
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
          onClearErrorsForFocus={handleFocus}
          onHandleChangeField={handleChange}
          onHandleErrors={handleBlur}
          placeholder='juanperez123@gmail.com'
          type='text'
          value={formData.email}
        />

        <Input
          error={formErrors.username}
          label='Usuario'
          name='username'
          onClearErrorsForFocus={handleFocus}
          onHandleChangeField={handleChange}
          onHandleErrors={handleBlur}
          placeholder='juanperez123'
          type='text'
          value={formData.username}
        />

        <Input
          error={formErrors.password}
          label='Contraseña'
          name='password'
          onClearErrorsForFocus={handleFocus}
          onHandleChangeField={handleChange}
          onHandleErrors={handleBlur}
          placeholder='••••••••••••••'
          type='password'
          value={formData.password}
        />

        <Input
          error={formErrors.repeatPassword}
          label='Repetir contraseña'
          name='repeatPassword'
          onClearErrorsForFocus={handleFocus}
          onHandleChangeField={handleChange}
          onHandleErrors={handleBlur}
          placeholder='••••••••••••••'
          type='password'
          value={formData.repeatPassword}
        />

        <Select
          disabledText='Selecciona un rol'
          label='Rol'
          name='role'
          onClearErrorsForFocus={handleFocus}
          onHandleChangeField={handleChange}
          onHandleErrors={handleBlur}
          options={options}
          placeholder='Rol'
          type='select'
          value={formData.role}
        />

        <ButtonsWrapper>
          <Button callback={clearForm} type='button'> Borrar Datos </Button>
          <Button type='submit'> Solicitar registro </Button>
        </ButtonsWrapper>
      </Form>
    </div>
  )
}

export default LogIn
