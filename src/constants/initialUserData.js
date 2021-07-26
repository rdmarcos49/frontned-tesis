export const initialUserData = {
  id: -1,
  avatar: null,
  name: 'Cargando...',
  lastname: ' ',
  role: null,
}

//TODO: improve this validations, 'cause "userData" can came as undefined
export const userHasNotFetchedYet = (userData = { id: -1 }) => {
  return userData.id === -1
}

export const theIdIsNotNull = (id) => {
  return id !== null
}
