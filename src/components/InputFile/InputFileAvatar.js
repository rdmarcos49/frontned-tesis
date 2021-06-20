// @packages
import React, { useState } from 'react'
// @components
import InputFile from './index'
import ModalCrop from 'components/ModalCrop'
// @styles
import styles from './InputFile.module.scss'

export const InputFileAvatar = ({ ...props }) => {
  const { callback, ...rest } = props
  // this is the reference to the original and selected image for crop
  const [image, setImage] = useState(null)
  // this is the cropped image
  const [croppedAvatar, setCroppedAvatar] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const resizeImage = (base64Str, maxWidth = 150, maxHeight = 150) => {
    return new Promise((resolve) => {
      let img = new Image()
      img.src = base64Str
      img.onload = () => {
        let canvas = document.createElement('canvas')
        const MAX_WIDTH = maxWidth
        const MAX_HEIGHT = maxHeight
        let width = img.width
        let height = img.height
  
        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width
            width = MAX_WIDTH
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height
            height = MAX_HEIGHT
          }
        }
        canvas.width = width
        canvas.height = height
        let ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL())
      }
    })
  }

  const handleCancelCrop = () => {
    setIsOpen(false)
  }

  const handleCroppedAvatar = async (newAvatar) => {
    // resizeImage(newAvatar).then(res => setCroppedAvatar(res))
    const result = await resizeImage(newAvatar)
    setCroppedAvatar(result)
    callback(result)
    setIsOpen(false)
  }

  const onHandleChange = (arrOfImages) => {
    const image = arrOfImages[0]
    setImage(image)
    setIsOpen(true)
  }

  return (
    <div className={styles.InputFileAvatar}>
      <ModalCrop cancelCrop={handleCancelCrop} handleCroppedAvatar={handleCroppedAvatar} isOpen={isOpen} src={image}/>
      <img
          alt='profile'
          src={`${croppedAvatar ? croppedAvatar : 'assets/default-profile-image.jpg'}`}
      />
      <InputFile handleChange={onHandleChange} text='Seleccionar archivo' {...rest} />
    </div>
  )
}

export default InputFileAvatar
