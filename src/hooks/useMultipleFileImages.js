import { useState } from 'react'

export const useMultipleFileImages = (addImage, removeImage) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [lastId, setLastId] = useState(0)

  const handleRemoveImage = (id) => {
    removeImage(id)
    if (!!selectedImage) {
      if (id === selectedImage.id) {
        setSelectedImage(null)
      }
    }
  }

  const handleSelectImage = ({ image, id }) => {
    setSelectedImage({ image, id })
  }

  const handleChange = arrOfImages => {
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
    addImage(newImages)
  }

  return {
    selectedImage,
    handleSelectImage,
    handleChange,
    handleRemoveImage,
  }
}
