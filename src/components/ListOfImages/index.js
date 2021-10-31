// @packages
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
// @styles
import {
  Container,
  ImagesWrapper,
  Image,
  IconWrapper,
} from './ListOfImages.styled'

function ListOfImages ({ images, onRemoveImage, onSelectImage }) {
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
            <IconWrapper
              className='list-of-images__wrapper__icon'
              onClick={() => onRemoveImage(image.id)}
            >
              <i className="fas fa-2x fa-times-circle"></i>
            </IconWrapper>
            <Image
              alt='small-capture'
              className='list-of-images__wrapper__image'
              onClick={() => onSelectImage(image)}
              src={image.image}
            />
          </ImagesWrapper>
        )
      })}
    </Container>
  )
}

export default ListOfImages

ListOfImages.propTypes = {
  images: PropTypes.array.isRequired,
  onRemoveImage: PropTypes.func,
  onSelectImage: PropTypes.func
}
