// @packages
import React, { useState } from 'react'
// @components
import InputFile from './index'
import ModalCrop from 'components/ModalCrop'
// @styles
import styles from "./InputFile.module.scss"

export const InputFileAvatar = ({ ...props }) => {
  // this is the reference to the original and selected image for crop
  const [image, setImage] = useState(null)
  // this is the cropped image
  const [croppedAvatar, setCroppedAvatar] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleCancelCrop = () => {
    setIsOpen(false)
  }

  const handleCroppedAvatar = (newAvatar) => {
    setCroppedAvatar(newAvatar)
    setIsOpen(false)
  }

  const onHandleChange = (image) => {
    setImage(image)
    setIsOpen(true)
  }

  return (
    <div className={styles.InputFileAvatar}>
      <ModalCrop cancelCrop={handleCancelCrop} handleCroppedAvatar={handleCroppedAvatar} isOpen={isOpen} src={image}/>
      <img
          alt='profile'
          src={`${croppedAvatar ? croppedAvatar : 'assets/default-profile-image.png'}`}
      />
      <InputFile handleChange={onHandleChange} {...props} />
    </div>
  )
}

export default InputFileAvatar
