const MIN_AGE = 0
const MAX_AGE = 100
const ONE = 1
const PASSWORD_MIN_LENGTH = 8
const NAME_MIN_LENGTH = 3
const LASTNAME_MIN_LENGTH = 3
const USERNAME_MIN_LENGTH = 5
const DNI_MIN_LENGTH = 7
const EMPTY_CHARACTER = ''
const SPACE = ' '

export const requiredField = (value) => {
  if (value !== EMPTY_CHARACTER) {
    return undefined
  } else {
    return 'Este campo es requerido'
  }
}

export const minLength = (minLengthOfField) => (value) => {
  if (value.length >= minLengthOfField) {
    return undefined
  } else {
    return `Este campo debe poseer al menos ${minLengthOfField} ${minLengthOfField === ONE ? 'caracter' : 'caracteres'}`
  }
}

export const withoutSpaces = (value) => {
  if (!value.split('').includes(SPACE)) {
    return undefined
  } else {
    return `Este campo no puede poseer espacios`
  }
}

export const validName = (value) => {
  const minLengthForName = minLength(NAME_MIN_LENGTH)
  const theNameIsTooShort = minLengthForName(value)
  if (!!theNameIsTooShort){
    return theNameIsTooShort
  }
}

export const validLastname = (value) => {
  const minLengthForLastname = minLength(LASTNAME_MIN_LENGTH)
  const theLastnameIsTooShort = minLengthForLastname(value)
  if (!!theLastnameIsTooShort){
    return theLastnameIsTooShort
  }
}

export const validDni = (value) => {
  const minLengthForDni = minLength(DNI_MIN_LENGTH)
  const theDniIsTooShort = minLengthForDni(value)
  const splittedValue = value.split('')
  for (const char of splittedValue) {
    if (!(/[0-9]/i.test(char))) {
      return 'Este campo solo debe poseer numeros'
    }
  }
  if (!!theDniIsTooShort) {
    return theDniIsTooShort
  }
}

export const validUsername = (value) => {
  const minLengthForUserName = minLength(USERNAME_MIN_LENGTH)
  const theUsernameIsTooShort = minLengthForUserName(value)
  if (!!theUsernameIsTooShort){
    return theUsernameIsTooShort
  }
  const thereIsSomeSpace = withoutSpaces(value)
  return thereIsSomeSpace
}

export const validPassword = (value) => {
  const regex_1 = /[a-z]+/i
  const regex_2 = /[A-Z]+/i
  const regex_3 = /[0-9]+/i
  if (regex_1.test(value) && regex_2.test(value) && regex_3.test(value) && value.length >= PASSWORD_MIN_LENGTH) {
    return undefined
  } else {
    return `La contraseña debe poseer al menos ${PASSWORD_MIN_LENGTH} caracteres y, entre ellos, una letra mayuscula, una minuscula y un numero`
  }
}

export const validRepeatPassword = (password) => (repeatPassword) => {
  if (password === repeatPassword) {
    return undefined
  } else {
    return 'Las contraseñas deben coincidir'
  }
}

export const validEmail = (value) => {
  // eslint-disable-next-line
  if (/^[a-zA-Z0-9]+[a-zA-Z0-9\.\_\-]*\@[a-zA-Z]{3,}\.[a-zA-Z]{2,}$/i.test(value)) {
    return undefined
  } else {
    return 'Introduce una dirección de correo electrónico valida'
  }
}

export const validAge = (value) => {
  if (value >= MIN_AGE && value <= MAX_AGE) {
    return undefined
  } else {
      return 'Introduzca una edad valida'
  }
}