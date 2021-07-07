// @packages
import { useState, useEffect } from 'react'
// @utils
import { getCurrentDate } from 'utils/date'
import { requiredField, validLastname, validName, validDni } from 'utils/validations'

function useForm() {

  const [data, setData] = useState({
    dni: '',
    consultDate: '',
    lastname: '',
    name: '',
    sex: '',
    birthday: '',
    diabetesType: '',
  })

  const [errors, setErrors] = useState({})

  useEffect(() => {
    const currentDate = getCurrentDate()
    setData(prevData => {
      return {
        ...prevData,
        consultDate: currentDate,
      }
    })
  }, [])

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

  const handleBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const errorValue = getErrorResult(field, value)
    setErrors({...errors, [field]: errorValue})
  }

  const handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newData = { ...data, [field]: value }
    setData(newData)
  }

  const handleFocus = (e) => {
    const field = e.target.name;
    setErrors({...errors, [field]: undefined})
  }

  return {
    data,
    errors,
    handleBlur,
    handleChange,
    handleFocus,
  }
}

export default useForm
