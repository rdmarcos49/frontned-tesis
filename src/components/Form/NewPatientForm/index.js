// @package
import { useState } from 'react'
import { useLocation } from 'wouter'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import Button from 'components/Button'
// @constants
import { URL } from 'constants/urls'

function NewPatientForm ({ handleOnSubmit, handlePrincipalForm }) { // TODO: this handlePrincipalForm method would be refactored, it's a code smell
  const [formData, setFormData] = useState({})
  const [, setLocation] = useLocation()

  const genderOptions = [
    { value: 'male', text: 'Masculino' },
    { value: 'female', text: 'Femenino' },
    { value: 'nsnc', text: 'Prefiero no responder' },
  ]

  const diabetesOptions = [
    { value: '1', text: 'Tipo I' },
    { value: '2', text: 'Tipo II' },
  ]

  const handlePreviousPage = () => {
    setLocation(URL.HOME)
  }

  const handleOnChange = (e) => {
    const { name: field, value } = e.target

    setFormData({
      ...formData,
      [field]: value,
    })
    handlePrincipalForm({
      ...formData,
      [field]: value,
    })
  }

  return (
    <Form onChange={handleOnChange} onSubmit={handleOnSubmit}>
      <Input
        autoFocus
        halfWidth
        label='DNI'
        name='dni'
        placeholder='12345678'
        type='text'
      />

      <Input
        halfWidth
        label='Fecha de consulta'
        name='checkDate'
        type='date'
      />

      <Input
        halfWidth
        label='Apellido'
        name='lastname'
        placeholder='Perez'
        type='text'
      />

      <Input
        halfWidth
        label='Nombre'
        name='name'
        placeholder='Juan'
        type='text'
      />

      <Select
        defaultValue=''
        disabledText='Seleccione una opcion'
        label='Sexo (asignado al nacer)'
        name='gender'
        options={genderOptions}
      />

      <Input
        label='Fecha de nacimiento'
        name='birthDate'
        type='date'
      />

      <Select
        defaultValue=''
        disabledText='Seleccione un tipo'
        label='Tipo de diabetes'
        name='diabetesType'
        options={diabetesOptions}
      />
      <ButtonsWrapper>
        <Button onClick={handlePreviousPage} type='button'> Volver </Button>
        <Button> Siguiente </Button>
      </ButtonsWrapper>
    </Form>
  )
}

export default NewPatientForm
