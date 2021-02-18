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

export default function NewPatient () {
  
  const [step, setStep] = useState(1)
  const [images, setImages] = useState([])
  const [lastId, setLastId] = useState(0)
  const [selectedImage, setSelectedImage] = useState(null)
  const inputFileRef = useRef(null)
  const {isLoading, isLogged} = useUser()

  const handleSubmit = (e, data) => {
    e.preventDefault()
    let formdata = new FormData()
    const objects = Object.entries(data)
    for (const obj of objects) {
      formdata.append(obj[0], obj[1])
    }
    console.log(formdata.values())
    for (const value of formdata) {
      console.log(value);
   }
   const response = {
    method: 'POST',
    headers: {
      'Content-type': 'multipart/form-data'
    },
    body: formdata,
  }
  fetch('http://localhost:3030/formdata', response).then(response => response.json()).then(response => console.log(response))
    // setStep(2)
  }

  const handleUploadImages = () => {
    inputFileRef.current.click()
  }

  const handleProfileImageChanged = (e) => {
    const thereIsAImage = !!e.target.files[0]
    console.log(thereIsAImage)
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
      console.log(newImages)
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

  const handleSelectImage = ({image, id}) => {
    setSelectedImage({image, id})
  }

  if (isLoading) {
    return <p>Cargando...</p>
  }

  return (
    <>
      {isLogged
      ?
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
              <Button callback={() => console.log("pendiente")}>
                Pendiente
              </Button>
            </div>
          }
        </div>
      :
        <p>No estas logueado y no podes ver este contenido</p>
      }
    </>
  )
}
