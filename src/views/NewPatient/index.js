// @packages
import React, { useRef, useState } from 'react'
// @componets
import Header from 'components/Header'
import Button from 'components/Button'
import ListOfImages from 'components/ListOfImages/index'
import SelectedImage from 'components/SelectedImage/index'
import NewPatientForm from 'components/NewPatientForm'
// @hooks
import useUser from 'hooks/useUser'
// @styles
import './styles.scss'

function NewPatient () {
  
  const [step, setStep] = useState(1)
  const [images, setImages] = useState([])
  const [lastId, setLastId] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const inputFileRef = useRef(null)

  const { isLoading, isLogged } = useUser()

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (!isLogged) {
    return <p>Para ver este contenido debes estar loggeado</p>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handleUploadImages = () => {
    inputFileRef.current.click()
  }

  const handleProfileImageChanged = (e) => {
    const thereIsAImage = !!e.target.files[0]
    let targetId = lastId
    if (thereIsAImage) {
      let newImages = []
      for (const image of images) {
        newImages.push(image)
      }
      for (const image of [...e.target.files]) {
        newImages.push(
          {
            id: targetId,
            image: URL.createObjectURL(image),
          }
        )
        targetId++
      }
      setLastId(targetId)
      setImages(newImages)
    }
  }

  const handleRemoveImage = (id) => {
    setImages(prevImages => {
      return prevImages.filter(image => image.id !== id)
    })
    if (!!selectedImage) {
      if (id === selectedImage.id) {
        setSelectedImage(null)
      }
    }
  }

  const handleSelectImage = ({ image, id }) => {
    setSelectedImage({ image, id })
  }

  return (
    <div className='NewPatient'>
      <Header />
      { step === 1 ?
        <NewPatientForm onHandleSubmit={handleSubmit}/>
      :
        <div className='NewPatient__images'>
          <input
            accept='.png, .jpg, .jpeg'
            name='images'
            multiple
            onChange={handleProfileImageChanged}
            type='file'
            ref={inputFileRef}
          />

          <div>
            <Button
              callback={handleUploadImages}
            >
              Subir imagenes
            </Button>
          </div>
          <div className='total-wrapper'>
            <SelectedImage
              selectedImage={selectedImage}
            />
            <ListOfImages
              images={images}
              onRemoveImage={handleRemoveImage}
              onSelectImage={handleSelectImage}
            />
          </div>
          <Button>
            Pendiente
          </Button>
        </div>
      }
    </div>
  )
}

export default NewPatient
