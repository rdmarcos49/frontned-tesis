// @packages
import React, { useRef } from 'react'
// @components
import Button from 'components/Button'
// @styles
import { Container, Input } from './styles';

export const InputFile = ({ ...props }) => {
  const { handleChange, text, ...rest } = props

  const inputFileRef = useRef(null)

  const resetInputFile = () => {
    inputFileRef.current.value = ''
  }

  const handleChangeOfImage = () => {
    inputFileRef.current.click()
  }

  const handleProfileImageChanged = async (e) => {
    const files = e.target.files
    if (files[0] && handleChange) {
      handleChange(files)
    }
    resetInputFile()
  }

  return (
    <Container>
      <Input
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
    </Container>
  )
}

export default InputFile
