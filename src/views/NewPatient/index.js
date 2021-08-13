// @packages
import { useState } from 'react'
// @componets
import Button from 'components/Button'
import ListOfImages from 'components/ListOfImages/index'
import SelectedImage from 'components/SelectedImage/index'
import NewPatientForm from 'components/Form/NewPatientForm'
import InputFileNewPatient from 'components/InputFile/InputFileNewPatient'
// @hooks
import useUser from 'hooks/useUser'
// @services
import sendNewPatientService from 'services/newCheckService'
// @constants
import { STEP_ONE, STEP_TWO } from 'constants/steps'
// @styles
import './styles.scss'
import AuthWrapper from 'components/AuthWrapper/index'

function NewPatient () {
  
  const [step, setStep] = useState(STEP_ONE)
  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [formData, setFormData] = useState({})

  const { isLoading, userData } = useUser()

  const handleNewPatient = () => {
    const jwt = window.sessionStorage.getItem('jwt')
    const filteredImages = [...images.map(image => image.image)]
    const payload = { ...formData, images: filteredImages }
    
    sendNewPatientService(payload, jwt)
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
    <AuthWrapper isLoading={isLoading} user={userData}>
      <div className='NewPatient'>
        { step === STEP_ONE ?
          <NewPatientForm handlePrincipalForm={setFormData} handleOnSubmit={moveToStepTwo}/>
        :
          <div className='NewPatient__images'> {/* refactor this, e.g: form_step_two */}
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
    </AuthWrapper>
  )
}

export default NewPatient
