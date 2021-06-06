// @packages
import React, { useRef } from 'react'
// @components
import Button from 'components/Button'
// @styles
import styles from "./InputFile.module.scss"

export const InputFile = ({ ...props }) => {
  const { handleChange, text, ...rest } = props

  const inputFileRef = useRef(null)

  const resetInputFile = () => {
    inputFileRef.current.value = ''
  }

  const handleChangeOfImage = () => {
    inputFileRef.current.click()
  }

  const getBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })

  const handleProfileImageChanged = async (e) => {
    const files = e.target.files
    if (files[0] && handleChange) {
      let base64NewImages = []
      for (const file of files) {
        const newImage = await getBase64(file)
        base64NewImages.push(newImage)
      }
      handleChange(base64NewImages)
    }
    resetInputFile()
  }

  return (
    <div className={styles.InputFile}>
      <input
        onChange={handleProfileImageChanged}
        ref={inputFileRef}
        type='file'
        {...rest}
      />
      <Button
        onClick={handleChangeOfImage}
        size='small'
        type='button'
        tabIndex='-1'
      >
        {text}
      </Button>
    </div>
  )
}

export default InputFile
