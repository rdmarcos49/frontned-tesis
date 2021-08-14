// @packages
import PropTypes from 'prop-types'
// @styles
import './styles.scss'

function ListOfImages ({ images, onRemoveImage, onSelectImage }) {
  return (
    <div className='list-of-images'>
      {images.map(image => {
        return (
          <div
            className='list-of-images__wrapper'
            key={image.id}
          >
            <span
              className='list-of-images__wrapper__icon'
              onClick={() => onRemoveImage(image.id)}
            >
              <i className="fas fa-2x fa-times-circle"></i>
            </span>
            <img
              alt='small-capture'
              className='list-of-images__wrapper__image'
              onClick={() => onSelectImage(image)}
              src={image.image}
            />
          </div>
        )
      })}
    </div>
  )
}

export default ListOfImages

ListOfImages.propTypes = {
  images: PropTypes.array.isRequired,
  onRemoveImage: PropTypes.func,
  onSelectImage: PropTypes.func
}
