// @packages
import React from 'react'
// @styles
import { Container, ImageWrapper, Image, } from './styles'

function SelectedImage ({ selectedImage }) {
  return (
    <Container>
      <ImageWrapper selectedImage={selectedImage}>
        <Image 
          alt='preview'
          selectedImage={selectedImage}
          src={selectedImage ? selectedImage.image : 'image-placeholder.png'}
        />
      </ImageWrapper>
    </Container>
  )
}

export default SelectedImage

//TODO: ADD PROPTYPES
