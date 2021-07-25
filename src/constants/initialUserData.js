export const initialUserData = {
  id: -1,
  avatar: null,
  name: 'Cargando...',
  lastname: ' ',
  role: null,
}

export const userHasNotFetchedYet = (userData) => {
  return userData.id === -1
}
