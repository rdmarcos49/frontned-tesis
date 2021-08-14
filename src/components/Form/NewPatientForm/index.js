// @package
import { useLocation } from 'wouter'
import PropTypes from 'prop-types'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import Button from 'components/Button'
// @constants
import { URL } from 'constants/urls'
// @local-helpers
import { genderOptions, diabetesOptions } from './helpers'

function NewPatientForm ({ formValues, goForward, handleOnChange }) {
  const [, setLocation] = useLocation()

  const handlePreviousPage = () => {
    setLocation(URL.HOME)
  }

  return (
    <Form onSubmit={goForward}>
      <Input
        autoFocus
        halfWidth
        label='DNI'
        name='dni'
        onChange={handleOnChange}
        placeholder='12345678'
        type='text'
        value={formValues.dni}
      />

      <Input
        halfWidth
        label='Fecha de consulta'
        name='checkDate'
        onChange={handleOnChange}
        type='date'
        value={formValues.checkDate}
      />

      <Input
        halfWidth
        label='Apellido'
        name='lastname'
        onChange={handleOnChange}
        placeholder='Perez'
        type='text'
        value={formValues.lastname}
      />

      <Input
        halfWidth
        label='Nombre'
        name='name'
        onChange={handleOnChange}
        placeholder='Juan'
        type='text'
        value={formValues.name}
      />

      <Select
        disabledText='Seleccione una opcion'
        label='Sexo (asignado al nacer)'
        name='gender'
        onChange={handleOnChange}
        options={genderOptions}
        value={formValues.gender}
      />

      <Input
        label='Fecha de nacimiento'
        name='birthDate'
        onChange={handleOnChange}
        type='date'
        value={formValues.birthDate}
      />

      <Select
        disabledText='Seleccione un tipo'
        label='Tipo de diabetes'
        name='diabetesType'
        onChange={handleOnChange}
        options={diabetesOptions}
        value={formValues.diabetesType}
      />
      <ButtonsWrapper>
        <Button onClick={handlePreviousPage} type='button'> Volver </Button>
        <Button> Siguiente </Button>
      </ButtonsWrapper>
    </Form>
  )
}

export default NewPatientForm

NewPatientForm.propTypes = {
  formValues: PropTypes.object,
  goForward: PropTypes.func,
  handleOnChange: PropTypes.func
}
