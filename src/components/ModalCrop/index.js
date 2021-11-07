// @packages
import { useState, useRef } from 'react'
import ReactCrop from 'react-image-crop';
import PropTypes from 'prop-types'
// @styles
import {
  Container,
  ButtonsWrapper,
  CancelButton,
  ConfirmButton,
} from './styles'
import 'react-image-crop/lib/ReactCrop.scss';

function ModalCrop({ cancelCrop, handleCroppedAvatar, isOpen = false, src }) {
  const [crop, setCrop] = useState({ aspect: 1, height: 150, width: 150 })
  const imageRef = useRef(null)

  const handleChange = (newCrop) => {
    setCrop(newCrop)
  }

  const cropImage = () => {
    const croppedImage = getSubImage(imageRef.current.imageRef)
    handleCroppedAvatar(croppedImage)
  }

  const getSubImage = (image) => {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height,
    );

    const base64Image = canvas.toDataURL('image/jpeg')

    return base64Image;
  }

  if (!isOpen) return null

  return (
    <Container>
      <ReactCrop ref={imageRef} onChange={handleChange} src={src} crop={crop} />
      <ButtonsWrapper>
        <CancelButton onClick={cancelCrop}>Cancelar</CancelButton>
        <ConfirmButton onClick={cropImage} type='button'>Seleccionar</ConfirmButton>
      </ButtonsWrapper>
    </Container>
  )
}

export default ModalCrop

ModalCrop.propTypes = {
  cancelCrop: PropTypes.func,
  handleCroppedAvatar: PropTypes.func,
  isOpen: PropTypes.bool,
}
