const signInService = async (payload) => {
  let formData = new FormData()
  for (const keysAndValues of Object.entries(payload)) {
    const [key, value] = keysAndValues
    formData.append(key, value)
  }
  const URL = 'http://localhost:3030/api/users'

  const result = await fetch(URL, {
    method: 'POST',
    body: formData,
  })
    .then(res => res.ok)
    .catch(err => console.error(err))

  return result
 }

export default signInService
