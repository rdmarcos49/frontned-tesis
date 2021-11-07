// @packages
import { useState } from 'react'
// @componets
import NewPatientForm from 'components/Form/NewPatientForm'
import SelectImagesPatient from 'components/SelectImagesPatient'
import AuthWrapper from 'components/AuthWrapper/index'
// @hooks
import useUser from 'hooks/useUser'
// @utils
import { initialPatientData, initialPatientImages } from 'utils/initialStates'
// @services
import newCheckService from 'services/newCheckService'
// @constants
import { STEP_ONE, STEP_TWO } from 'constants/steps'
// @local-helpers
import { getFormattedImages } from './helpers'
// @styles
import { Container } from './styles'

function NewPatient () {
  const [step, setStep] = useState(STEP_ONE)
  const [patientData, setPatientData] = useState(initialPatientData)
  const [images, setImages] = useState(initialPatientImages)
  const { isLoading, userData } = useUser()
  
  const handleChangePatientData = (event) => {
    const { name: field, value } = event.target

    setPatientData({
      ...patientData,
      [field]: value,
    })
  }

  const returnToStepOne = () => {
    setStep(STEP_ONE)
  }

  const moveToStepTwo = (e) => {
    e.preventDefault()
    setStep(STEP_TWO)
  }

  const addImages = (newImages) => {
    setImages([
      ...images,
      ...newImages,
    ])
  }

  const removeImage = (id) => {
    setImages(prevImages => {
      return prevImages.filter(image => image.id !== id)
    })
  }

  const handleOnSubmit = () => {
    const formattedImages = getFormattedImages(images)
    const payload = { ...patientData, images: formattedImages }
    newCheckService(payload)
  }

  if (step === STEP_ONE) return (
    <AuthWrapper isLoading={isLoading} user={userData}>
      <Container>
        <NewPatientForm
          formValues={patientData}
          goForward={moveToStepTwo}
          handleOnChange={handleChangePatientData}
        />
      </Container>
    </AuthWrapper>
  )

  if (step === STEP_TWO) return (
    <AuthWrapper isLoading={isLoading} user={userData}>
      <Container>
        <SelectImagesPatient
          addImages={addImages}
          goBack={returnToStepOne}
          onSubmit={handleOnSubmit}
          currentImages={images}
          removeImage={removeImage}
        />
      </Container>
    </AuthWrapper>
  )
}

export default NewPatient
