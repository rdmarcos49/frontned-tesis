// @packages
import { useState } from 'react'
import PropTypes from 'prop-types'
// @componets
import Button from 'components/Button'
import ListOfImages from 'components/ListOfImages/index'
import SelectedImage from 'components/SelectedImage/index'
import InputFileNewPatient from 'components/InputFile/InputFileNewPatient'
// @styles
import styles from './SelectImagesPatient.module.scss'

function SelectImagesPatient({ addImages, currentImages, goBack, onSubmit, removeImage }) {
  const [selectedImage, setSelectedImage] = useState(null)

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

  return (
    <div className={styles.SelectImagesPatient}>
      <InputFileNewPatient callback={addImages} accept='.png, .jpg, .jpeg' multiple />

      <div className={styles.ImagesSelector}>
        <SelectedImage
          selectedImage={selectedImage}
        />
        <ListOfImages
          images={currentImages}
          onRemoveImage={handleRemoveImage}
          onSelectImage={handleSelectImage}
        />
      </div>
      <div className={styles.ImagesFooter}>
        <Button onClick={goBack}>
          Volver
        </Button>
        <Button onClick={onSubmit}>
          Finalizar
        </Button>
      </div>
    </div>
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
// addImages, currentImages, goBack, onSubmit, removeImage
