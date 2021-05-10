// @package
import { useLocation } from 'wouter'
// @components
import Form from 'components/Form'
import Input from 'components/Input'
import Select from 'components/Select'
import ButtonsWrapper from 'components/ButtonsWrapper'
import Button from 'components/Button'
// @hooks
import useForm from './hook'


export default function NewPatientForm ({onHandleSubmit}) {
  const [, setLocation] = useLocation()

  const {
    data,
    errors,
    handleFocus,
    handleChange,
    handleBlur,
  } = useForm()

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
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='12345678'
        type='text'
        value={data.dni}
      />

      <Input
        error={errors.consultDate}
        halfWidth
        label='Fecha de consulta'
        name='consultDate'
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=''
        type='date'
        value={data.consultDate}
      />

      <Input
        error={errors.lastname}
        halfWidth
        label='Apellido'
        name='lastname'
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Perez'
        type='text'
        value={data.lastname}
      />

      <Input
        error={errors.name}
        halfWidth
        label='Nombre'
        name='name'
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder='Juan'
        type='text'
        value={data.name}
      />

      <Select
        disabledText='Seleccione una opcion'
        error={errors.sex}
        label='Sexo (asignado al nacer)'
        name='sex'
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        options={sexOptions}
        placeholder=''
        value={data.sex}
      />

      <Input
        error={errors.birthday}
        label='Fecha de nacimiento'
        name='birthday'
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder=''
        type='date'
        value={data.birthday}
      />

      <Select
        disabledText='Seleccione un tipo'
        error={errors.diabetesType}
        label='Tipo de diabetes'
        name='diabetesType'
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        options={diabetesOptions}
        placeholder=''
        value={data.diabetesType}
      />
      <ButtonsWrapper>
        <Button onClick={handlePreviousPage}> Volver </Button>
        <Button> Siguiente </Button>
      </ButtonsWrapper>
    </Form>
  )
}
