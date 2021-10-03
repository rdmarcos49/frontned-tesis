// @packages
import React from 'react'
// @styles
import { Container, ImageWrapper, Image, } from 'SelectedImage.styled'

function SelectedImage ({ selectedImage }) {
  return (
    <Container>
      <ImageWrapper selectedImage>
        <Image 
          alt='preview'
          selectedImage
          src={selectedImage ? selectedImage.image : 'image-placeholder.png'}
        />
      </ImageWrapper>
    </Container>
  )
}

export default SelectedImage

//TODO: ADD PROPTYPES
