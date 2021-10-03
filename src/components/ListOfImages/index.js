// @packages
import PropTypes from 'prop-types'
// @styles
import {
  Container,
  ImagesWrapper,
  Image,
  IconWrapper,
} from './ListOfImages.styled'

function ListOfImages ({ images, onRemoveImage, onSelectImage }) {
  return (
    <Container>
      {images.map(image => {
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
