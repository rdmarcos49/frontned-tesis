// @packages
import { useState } from 'react'
import PropTypes from 'prop-types'
// @componets
import Button from 'components/Button'
import ListOfImages from 'components/ListOfImages/index'
import SelectedImage from 'components/SelectedImage/index'
import InputFile from 'components/InputFile'
// @styles
import { Container, ImageSelectorWrapper, ImagesFooterWrapper } from './styles'

function SelectImagesPatient({ addImages, currentImages, goBack, onSubmit, removeImage }) {
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
    addImages(newImages)
  }

  return (
    <Container>
      <InputFile handleChange={onHandleChange} text='Selecciona imagenes' accept='.png, .jpg, .jpeg' multiple />

      <ImageSelectorWrapper>
        <SelectedImage
          selectedImage={selectedImage}
        />
        <ListOfImages
          images={currentImages}
          onRemoveImage={handleRemoveImage}
          onSelectImage={handleSelectImage}
        />
      </ImageSelectorWrapper>

      <ImagesFooterWrapper>
        <Button onClick={goBack}>
          Volver
        </Button>
        <Button onClick={onSubmit}>
          Finalizar
        </Button>
      </ImagesFooterWrapper>
    </Container>
  )
}

export default SelectImagesPatient

SelectImagesPatient.propTypes = {
  addImages: PropTypes.func.isRequired,
  currentImages: PropTypes.array.isRequired,
  goBack: PropTypes.func,
  onSubmit: PropTypes.func,
  removeImage: PropTypes.func
}
