import { useState } from 'react'

export function useMultipleFileImages () {
  const [listOfImages, setListOfImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [lastId, setLastId] = useState(0)

  const handleRemoveImage = (id) => {
    setListOfImages(prevImages => {
      return prevImages.filter(image => image.id !== id)
    })

    if (!!selectedImage) {
      if (id === selectedImage.id) {
        setSelectedImage(null)
      }
    }
  }

  const handleSelectImage = ({ image, id }) => {
    setSelectedImage({ image, id })
  }

  const handleAddImages = arrOfImages => {
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
    setListOfImages([
      ...listOfImages,
      ...newImages,
    ])
  }



  return {
    selectedImage,
    listOfImages,
    handleSelectImage,
    handleAddImages,
    handleRemoveImage,
  }
}

export default useMultipleFileImages
