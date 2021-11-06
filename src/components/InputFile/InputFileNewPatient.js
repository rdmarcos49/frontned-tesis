// @packages
import { useState } from 'react'
// @components
import InputFile from './index'

function InputFileNewPatient({ handleArrayOfImagesSelected, ...props }) {
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
    handleArrayOfImagesSelected(newImages)
  }

  return (
    <InputFile handleChange={onHandleChange} text='Selecciona imagenes' {...props} />
  )
}

export default InputFileNewPatient
