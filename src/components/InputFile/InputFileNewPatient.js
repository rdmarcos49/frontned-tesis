// @packages
import { useState } from 'react'
// @components
import InputFile from './index'

function InputFileNewPatient({ ...props }) {
  const { callback, ...rest } = props
  const [lastId, setLastId] = useState(1)

  const onHandleChange = arrOfImages => {
    let localLastId = lastId
    let newImages = []

    for (const image of arrOfImages) {
      newImages.push({
        id: localLastId,
        image,
      })
      localLastId++
    }

    setLastId(localLastId)
    callback(newImages)
  }

  return (
    <InputFile handleChange={onHandleChange} text='Selecciona imagenes' {...rest} />
  )
}

export default InputFileNewPatient
