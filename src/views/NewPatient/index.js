// @packages
import { useState } from 'react'
import { useLocation } from 'wouter'
// @componets
import Button from 'components/Button'
import ListOfImages from 'components/ListOfImages/index'
import SelectedImage from 'components/SelectedImage/index'
import NewPatientForm from 'components/Form/NewPatientForm'
import InputFileNewPatient from 'components/InputFile/InputFileNewPatient'
// @hooks
import useUser from 'hooks/useUser'
// @services
import sendNewPatientService from 'services/sendNewPatientService'
// @constants
import { STEP_ONE, STEP_TWO } from 'constants/steps'
// @styles
import './styles.scss'

function NewPatient () {
  
  const [step, setStep] = useState(STEP_ONE)
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const { isLoading, isLogged } = useUser()
  const [, setLocation] = useLocation()

  if (isLoading) return <p>Cargando...</p>

  if (!isLogged) setLocation(URL.ERROR_PAGE)

  const handleNewPatient = () => {
    const randomDni = Math.floor(Math.random() * 100 + 100000)
    const jwt = window.sessionStorage.getItem('jwt')
    sendNewPatientService({ dni: randomDni, images: [...images.map(image => image.image)], jwt })
  }

  const moveToStepTwo = (e) => {
    e.preventDefault()
    setStep(STEP_TWO)
  }

  const returnToStepOne = () => {
    setStep(STEP_ONE)
  }

  const handleChangeImages = newImages => {
    setImages([
      ...images,
      ...newImages,
    ])
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
      { step === STEP_ONE ?
        <NewPatientForm handleOnSubmit={moveToStepTwo}/>
      :
        <div className='NewPatient__images'>
          <InputFileNewPatient callback={handleChangeImages} accept='.png, .jpg, .jpeg' multiple />

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
          <div className='listOfImagesFooter'>
            <Button onClick={returnToStepOne}>
              Volver
            </Button>
            <Button onClick={handleNewPatient}>
              Finalizar
            </Button>
          </div>
        </div>
      }
    </div>
  )
}

export default NewPatient
