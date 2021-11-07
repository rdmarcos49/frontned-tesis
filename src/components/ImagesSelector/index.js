// @packages
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
// @styles
import {
  Container,
  ImagesWrapper,
  Image,
  IconWrapper,
} from './styles'

function ImagesSelector ({ images, onRemoveImage, onSelectImage }) {
  const [transformedImages, setTransformedImages] = useState([])

  useEffect(() => {
    const newImages = images.map(image => {
      const { id, image: imageFile } = image
      const imageUrl = URL.createObjectURL(imageFile)
      return {
        id,
        image: imageUrl,
      }
    })

    setTransformedImages(newImages)
  }, [images])
  
  return (
    <Container>
      {transformedImages.map(image => {
        return (
          <ImagesWrapper key={image.id} >
            <IconWrapper onClick={() => onRemoveImage(image.id)}>
              <i className="fas fa-2x fa-times-circle"></i>
            </IconWrapper>
            <Image
              alt='small-capture'
              onClick={() => onSelectImage(image)}
              src={image.image}
            />
          </ImagesWrapper>
        )
      })}
    </Container>
  )
}

export default ImagesSelector

ImagesSelector.propTypes = {
  images: PropTypes.array.isRequired,
  onRemoveImage: PropTypes.func,
  onSelectImage: PropTypes.func
}
