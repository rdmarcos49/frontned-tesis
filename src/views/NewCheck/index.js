// @packages
import { useState } from 'react'
// @componets
import NewCheckForm from 'components/Form/NewCheckForm'
import AuthWrapper from 'components/AuthWrapper/index'
import ImagesSelector from 'components/ImagesSelector'
import Button from 'components/Button'
import SelectedImage from 'components/SelectedImage/index'
import InputFile from 'components/InputFile'
// @hooks
import { useUser, useSteps, useMultipleFileImages } from 'hooks'
// @consntants
import { STEP_ONE, STEP_TWO } from 'constants/steps'
// @utils
import { initialPatientData } from 'utils/initialStates'
// @services
import newCheckService from 'services/newCheckService'
// @local-helpers
import { getFormattedImages } from './helpers'
// @styles
import { Container, SelectImagesWrapper, ImagesViewerWrapper, OptionsFooter } from './styles'

function NewCheck () {
  const [patientData, setPatientData] = useState(initialPatientData)
  const { selectedImage, listOfImages, handleSelectImage, handleAddImages, handleRemoveImage } = useMultipleFileImages()
  const { step, moveToStepOne, moveToStepTwo } = useSteps()
  const { isLoading, userData } = useUser()
  
  const handleChangePatientData = (event) => {
    const { name: field, value } = event.target

    setPatientData({
      ...patientData,
      [field]: value,
    })
  }

  const handleOnSubmit = () => {
    const formattedImages = getFormattedImages(listOfImages)
    const payload = { ...patientData, images: formattedImages }
    newCheckService(payload)
  }

  if (step === STEP_ONE) return (
    <AuthWrapper isLoading={isLoading} user={userData}>
      <Container>
        <NewCheckForm
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
        <SelectImagesWrapper>
          <InputFile handleChange={handleAddImages} text='Selecciona imagenes' accept='.png, .jpg, .jpeg' multiple />

          <ImagesViewerWrapper>
            <SelectedImage selectedImage={selectedImage} />
            <ImagesSelector
              images={listOfImages}
              onRemoveImage={handleRemoveImage}
              onSelectImage={handleSelectImage}
            />
          </ImagesViewerWrapper>

          <OptionsFooter>
            <Button onClick={moveToStepOne}> Volver </Button>
            <Button onClick={handleOnSubmit}> Finalizar </Button>
          </OptionsFooter>
        </SelectImagesWrapper>
      </Container>
    </AuthWrapper>
  )
}

export default NewCheck
