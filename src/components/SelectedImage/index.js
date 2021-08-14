// @packages
import React from 'react'
// @styles
import './styles.scss'

function SelectedImage ({ selectedImage }) {
  return (
    <div className={`selected-image-wrapper ${!!selectedImage ? '' : 'selected-image-wrapper--bordered'}`}>
      <div className={`selected-image-wrapper__outter-layout
        ${!!selectedImage ? 'selected-image-wrapper__outter-layout--normal-border' : 'selected-image-wrapper__outter-layout--dashed-border'}`}
      >
        {selectedImage !== null
        ?
          <img
            alt='preview'
            className='selected-image-wrapper__outter-layout__image'
            src={selectedImage.image}
          />
        :
            <img
              alt='preview'
              className='selected-image-wrapper__outter-layout__image-placeholder'
              src='image-placeholder.png'
            />
        }
      </div>
    </div>
  )
}

export default SelectedImage

//TODO: ADD PROPTYPES
