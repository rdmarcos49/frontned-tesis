// @packages
import React, { useState } from 'react'
// @components
import InputFile from './index'
import ModalCrop from 'components/ModalCrop'
// @styles
import styles from './InputFile.module.scss'

export const InputFileAvatar = ({ ...props }) => {
  const { callback, ...rest } = props
  const [image, setImage] = useState(null)
  const [croppedAvatar, setCroppedAvatar] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  function dataURLtoFile(dataurl, filename) {
 
    let arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), 
        n = bstr.length, 
        u8arr = new Uint8Array(n);
        
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    
    return new File([u8arr], filename, {type:mime});
  }

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
        // aca la convierto
        const file = dataURLtoFile(canvas.toDataURL(),'avatar');

        resolve(file)
      }
    })
  }

  const handleCancelCrop = () => {
    setIsOpen(false)
  }

  const handleCroppedAvatar = async (newAvatar) => {
    const result = await resizeImage(newAvatar)
    const transformedResult = URL.createObjectURL(result);
    setCroppedAvatar(transformedResult)
    callback(result)
    setIsOpen(false)
  }

  const onHandleChange = (arrOfImages) => {
    const image = arrOfImages[0]
    const imageSrc = URL.createObjectURL(image)
    setImage(imageSrc)
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
