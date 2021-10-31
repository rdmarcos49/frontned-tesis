const newCheckService = async (payload) => {
  const { images, ...payloadWithoutImages } = payload
  const imagesKey = 'images'

  let formData = new FormData()
  for (const keysAndValues of Object.entries(payloadWithoutImages)) {
    const [key, value] = keysAndValues
    formData.append(key, value)
  }

  for (const image of images) {
    formData.append(imagesKey, image)
  }

  const URL = 'http://localhost:3030/api/patients'
  const jwt = window.sessionStorage.getItem('jwt')

  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${jwt}`,
    },
    body: formData,
  })
    .then(response => response.ok)
    .catch(err => console.error(err))
  return response
 }

export default newCheckService
