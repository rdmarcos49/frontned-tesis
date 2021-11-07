// @packages
import PropTypes from 'prop-types'
// @componets
import Button from 'components/Button'
import ListOfImages from 'components/ListOfImages/index'
import SelectedImage from 'components/SelectedImage/index'
import InputFile from 'components/InputFile'
// @styles
import { Container, ImagesViewerWrapper, OptionsFooter } from './styles'
import { useMultipleFileImages } from 'hooks/useMultipleFileImages'

function SelectImagesPatient({ addImages, currentImages, goBack, onSubmit, removeImage }) {
  const { selectedImage, handleSelectImage, handleChange, handleRemoveImage } = useMultipleFileImages(addImages, removeImage)

  return (
    <Container>
      <InputFile handleChange={handleChange} text='Selecciona imagenes' accept='.png, .jpg, .jpeg' multiple />

      <ImagesViewerWrapper>
        <SelectedImage selectedImage={selectedImage} />
        <ListOfImages
          images={currentImages}
          onRemoveImage={handleRemoveImage}
          onSelectImage={handleSelectImage}
        />
      </ImagesViewerWrapper>

      <OptionsFooter>
        <Button onClick={goBack}> Volver </Button>
        <Button onClick={onSubmit}> Finalizar </Button>
      </OptionsFooter>
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
