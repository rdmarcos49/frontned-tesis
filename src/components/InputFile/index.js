// @packages
import React, { useRef } from 'react'
// @components
import Button from 'components/Button'
// @styles
import styles from "./InputFile.module.scss"

export const InputFile = ({ ...props }) => {
  const { handleChange, ...rest } = props

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
    const file = e.target.files[0]
    if (!!file && handleChange) {
      const base64NewImage = await getBase64(file)
      handleChange(base64NewImage) 
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
        Seleccionar archivo
      </Button>
    </div>
  )
}

export default InputFile
