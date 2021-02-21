const signInService = async (dataFromUserForm) => {
  let formData = new FormData()
  for (const keysAndValues of Object.entries(dataFromUserForm)) {
    const [key, value] = keysAndValues
    formData.append(key, value)
  }
  const response = {
    method: 'POST',
    body: formData,
  }
  console.log(response)
  const info = await fetch('http://localhost:3030/signin', response).then(response => response.json())
  console.log(info)
 }

export default signInService
