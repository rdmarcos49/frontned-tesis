// @packages
import { useState } from 'react'
// @utils
import { requiredField, validLastname, validName, validUsername, validPassword, validRepeatPassword, validEmail } from 'utils/regex'

export function useSignInForm () {
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

  const handleChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [field]: value,
    })
  }

  const handleFocus = (e) => {
    const field = e.target.name
    setFormErrors({
      ...formErrors,
      [field]: undefined,
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

  const handleBlur = (e) => {
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

  const clearForm = () => {
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

  return {
    clearForm,
    formData,
    formErrors,
    handleBlur,
    handleFocus,
    handleChange,
  }
} 
