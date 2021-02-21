// @package
import {useState, useEffect} from 'react'
import { useLocation } from 'wouter'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import Button from 'components/Button'
// @utils
import { requiredField, validLastname, validName, validDni } from 'utils/regex'
import { getFormattedDay, getFormattedMonth } from 'utils/date'

export default function NewPatientForm ({onHandleSubmit}) {
  const [, setLocation] = useLocation()

  const getCurrentDate = () => {
    const date = new Date()
    const day = getFormattedDay(date.getDate())
    const month = getFormattedMonth(date.getMonth()) 
    const year = date.getFullYear()
    
    const currentDate = `${year}-${month}-${day}`
    return currentDate
  }

  const [data, setData] = useState({
    dni: '',
    consultDate: '',
    lastname: '',
    name: '',
    sex: '',
    birthday: '',
    diabetesType: '',
  })

  useEffect(() => {
    const currentDate = getCurrentDate()
    setData(prevData => {
      return {
        ...prevData,
        consultDate: currentDate,
      }
    })
  }, [])

  const [errors, setErrors] = useState({})

  const getErrorResult = (field, value) => {
    const theFieldIsEmpty = requiredField(value)
    if (!theFieldIsEmpty) {
      switch(field) {
        case 'dni':
          return validDni(value)
        case 'lastname':
          return validLastname(value)
        case 'name':
          return validName(value)
        default:
          return null
      }
    } else {
      return theFieldIsEmpty
    }
  }

  const handleChangeField = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newData = { ...data, [field]: value }
    setData(newData)
  }

  const clearErrorsForFocus = (e) => {
    const field = e.target.name;
    setErrors({...errors, [field]: undefined})
  }

  const handleErrors = (e) => {
    const field = e.target.name
    const value = e.target.value
    const errorValue = getErrorResult(field, value)
    setErrors({...errors, [field]: errorValue})
  }

  const handlePreviousPage = () => {
    setLocation('/home')
  }

  const sexOptions = [
    {value: 'male', text: 'Masculino'},
    {value: 'female', text: 'Femenino'},
    {value: 'nsnc', text: 'Prefiero no responder'},
  ]

  const diabetesOptions = [
    {value: '1', text: 'Tipo I'},
    {value: '2', text: 'Tipo II'},
  ]

  return (
    <Form onHandleSubmit={onHandleSubmit}>
      <Input
        error={errors.dni}
        halfWidth
        label='DNI'
        name='dni'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        placeholder='12345678'
        type='text'
        value={data.dni}
      />

      <Input
        error={errors.consultDate}
        halfWidth
        label='Fecha de consulta'
        name='consultDate'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        placeholder=''
        type='date'
        value={data.consultDate}
      />

      <Input
        error={errors.lastname}
        halfWidth
        label='Apellido'
        name='lastname'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        placeholder='Perez'
        type='text'
        value={data.lastname}
      />

      <Input
        error={errors.name}
        halfWidth
        label='Nombre'
        name='name'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        placeholder='Juan'
        type='text'
        value={data.name}
      />

      <Select
        disabledText='Seleccione una opcion'
        error={errors.sex}
        label='Sexo (asignado al nacer)'
        name='sex'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        options={sexOptions}
        placeholder=''
        value={data.sex}
      />

      <Input
        error={errors.birthday}
        label='Fecha de nacimiento'
        name='birthday'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        placeholder=''
        type='date'
        value={data.birthday}
      />

      <Select
        disabledText='Seleccione un tipo'
        error={errors.diabetesType}
        label='Tipo de diabetes'
        name='diabetesType'
        onClearErrorsForFocus={clearErrorsForFocus}
        onHandleChangeField={handleChangeField}
        onHandleErrors={handleErrors}
        options={diabetesOptions}
        placeholder=''
        value={data.diabetesType}
      />
      <ButtonsWrapper>
        <Button callback={handlePreviousPage} type='button'> Volver </Button>
        <Button type='submit'> Siguiente </Button>
      </ButtonsWrapper>
    </Form>
  )
}
