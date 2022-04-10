import React, { useEffect, useState } from 'react'

import { DeliveryData } from './DeliveryData'
import { PersonalData } from './PersonalData'
import { UserData } from './UserData'

import { Typography, Stepper, Step, StepLabel } from '@mui/material'

export function Form({ onSubmit, validations }) {
  const [currentStage, setCurrentStage] = useState(0)
  const [collectedData, setCollectedData] = useState({})

  useEffect(() => {
    if (currentStage === forms.length - 1) {
      onSubmit(collectedData)
    }
  })

  const forms = [
    <UserData onSubmit={getData} validations={validations}/>,
    <PersonalData onSubmit={getData} validations={validations} />,
    <DeliveryData onSubmit={getData} validations={validations} />,
    <Typography variant="h5">Obrigado por se cadastrar!</Typography>
  ]

  function getData(data) {
    setCollectedData({ ...collectedData, ...data })
    nextStage()
  }

  function nextStage() {
    setCurrentStage(currentStage + 1)
  }

  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dados Pessoais</StepLabel>
        </Step>
        <Step>
          <StepLabel>Endereço</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {forms[currentStage]}
    </>
  )
}
