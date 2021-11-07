// @packages
import { useState } from 'react'
// @constants
import { STEP_ONE, STEP_TWO } from 'constants/steps'

export function useSteps() {
  const [step, setStep] = useState(STEP_ONE)

  const moveToStepOne = () => {
    setStep(STEP_ONE)
  }

  const moveToStepTwo = () => {
    setStep(STEP_TWO)
  }

  return {
    step,
    moveToStepOne,
    moveToStepTwo,
  }
}
